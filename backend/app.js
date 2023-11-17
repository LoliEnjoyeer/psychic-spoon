//Libs
import Fastify from "fastify";
import cors from "@fastify/cors";
//Routes
import miscRoutes from "./routes/misc.js";
import userRoutes from "./routes/user.js";
//Database
import { db } from "./Database/config.js";
import { userModel, ApiModel } from "./Database/models.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

// fastify.addHook("onResponse", async (req, res) => {
//   const ApiLog = new ApiModel({
//     id: req.id,
//     method: req.raw.method,
//     path: req.raw.url,
//     statusCode: res.statusCode,
//     timestamp: new Date(),
//     ip: req.ip,
//   });

//   try {
//     await ApiLog.save();
//   } catch (err) {
//     console.log("Couldn't save Api Log");
//   }
// });

fastify.register(miscRoutes);
fastify.register(userRoutes);

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
