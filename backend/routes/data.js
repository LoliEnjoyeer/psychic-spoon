import {
  ESPDataModel,
  DataAlertsModel,
  IoTDeviceModel,
} from "../Database/models.js";
import { db, dateOptions } from "../Database/config.js";

async function dataRoutes(fastify, options) {
  fastify.get("/", async (req, res) => {
    return { hello: "world" };
  });

  fastify.get("/data/showData/IoTDevice", async (req, res) => {
    const { timeout = 3000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    await fetch("http://192.168.137.90:80/ESPRequest", {
      ...options,
      signal: controller.signal,
    })
      .then(async (response) => {
        clearTimeout(id);
        await IoTDeviceModel.updateOne(
          { deviceName: "ESP32-DataCollect" },
          { isConnected: true }
        );
      })
      .catch(async (err) => {
        clearTimeout(id);
        await IoTDeviceModel.updateOne(
          { deviceName: "ESP32-DataCollect" },
          { isConnected: false }
        );
      });

    const IoTDeviceData = await IoTDeviceModel.find();

    res.code(200).send(IoTDeviceData);
  });

  fastify.post("/data/UpdateData", async (req, res) => {
    const data = req.body;
    //Temperature
    if (data.temperature > 25) {
      const newAlert = new DataAlertsModel({
        dataType: "Temperature",
        reason: "Too high",
        value: data.temperature,
        alertDate: new Date().toLocaleString("en-US", dateOptions),
      });
      try {
        newAlert.save();
      } catch (err) {
        console.log("Saving alert Failed");
        w;
      }
    } else if (data.temperature < 0) {
      const newAlert = new DataAlertsModel({
        dataType: "Temperature",
        reason: "Too low",
        value: data.temperature,
        alertDate: new Date().toLocaleString("en-US", dateOptions),
      });
      try {
        newAlert.save();
      } catch (err) {
        console.log("Saving alert Failed");
      }
    }
    //SeaLevelPressure
    if (data.slpressure > 1020) {
      const newAlert = new DataAlertsModel({
        dataType: "Sea Level Pressure",
        reason: "Too high",
        value: data.slpressure,
        alertDate: new Date().toLocaleString("en-US", dateOptions),
      });
      try {
        newAlert.save();
      } catch (err) {
        console.log("Saving alert Failed");
        w;
      }
    } else if (data.slpressure < 1000) {
      const newAlert = new DataAlertsModel({
        dataType: "Sea Level Pressure",
        reason: "Too low",
        value: data.slpressure,
        alertDate: new Date().toLocaleString("en-US", dateOptions),
      });
      try {
        newAlert.save();
      } catch (err) {
        console.log("Saving alert Failed");
      }
    }
    //Rain
    if (data.rain > 85) {
      const newAlert = new DataAlertsModel({
        dataType: "Rain Chance",
        reason: "High",
        value: data.rain,
        alertDate: new Date().toLocaleString("en-US", dateOptions),
      });
      try {
        newAlert.save();
      } catch (err) {
        console.log("Saving alert Failed");
        w;
      }
    }
    const newData = new ESPDataModel({
      ESPtemperature: data.temperature,
      ESPslpressure: data.slpressure,
      ESPrain: data.rain,
    });
    try {
      await db.collection("DeviceData").deleteMany({});
      newData.save();
    } catch (err) {
      console.log("Saving newest data from ESP failed.");
    }
    res.code(200).send("OKOK");
  });
}

export default dataRoutes;
