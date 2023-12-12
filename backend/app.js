//Libs
import Fastify from "fastify";
import cors from "@fastify/cors";
//Routes
import dataRoutes from "./routes/data.js";
import deviceRoutes from "./routes/device.js";
import userRoutes from "./routes/user.js";
//Database
import { db, dateOptions } from "./Database/config.js";
import { userModel, ApiModel } from "./Database/models.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);
// APi Logging
fastify.addHook("onResponse", async (req, res) => {
  const ApiLog = new ApiModel({
    id: req.id,
    method: req.raw.method,
    path: req.raw.url,
    statusCode: res.statusCode,
    timestamp: new Date().toLocaleString("en-US", dateOptions),
    ip: req.ip,
  });

  try {
    await ApiLog.save();
  } catch (err) {
    console.log("Couldn't save Api Log");
  }
});

fastify.register(dataRoutes);
fastify.register(userRoutes);
fastify.register(deviceRoutes);

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
