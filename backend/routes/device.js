import { IoTDeviceModel } from "../Database/models.js";
import { db, dateOptions } from "../Database/config.js";
async function deviceRoutes(fastify, options) {
  // fastify.get("/device/check", async (req, res) => {
  //   const { timeout = 3000 } = options;

  //   const controller = new AbortController();
  //   const id = setTimeout(() => controller.abort(), timeout);
  //   await fetch("http://192.168.137.90:80/ESPRequest", {
  //     ...options,
  //     signal: controller.signal,
  //   })
  //     .then((response) => {
  //       clearTimeout(id);
  //       res.code(200).send(true);
  //     })
  //     .catch((err) => {
  //       clearTimeout(id);
  //       res.code(200).send(false);
  //     });
  // });

  fastify.post("/device/IoTDevice", async (req, res) => {
    const data = req.body;
    try {
      await db.collection("IoTDevice").deleteOne({
        deviceName: data.deviceName,
      });
    } catch (err) {}

    const newIoTDevice = new IoTDeviceModel({
      deviceName: data.deviceName,
      ip: data.ip,
      location: data.location,
      isConnected: true,
      lastSeen: new Date().toLocaleString("en-US", dateOptions),
    });
    try {
      await newIoTDevice.save();
    } catch (err) {
      console.log("error saving IoTDevice");
    }
    res.code(200).send("OK");
  });
}

export default deviceRoutes;
