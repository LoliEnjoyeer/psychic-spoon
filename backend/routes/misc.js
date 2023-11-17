import { ESPDataModel } from "../Database/models.js";
import { db } from "../Database/config.js";

async function miscRoutes(fastify, options) {
  fastify.get("/", async (req, res) => {
    return { hello: "world" };
  });

  fastify.post("/UpdateData", async (req, res) => {
    const data = req.body;
    const newData = new ESPDataModel({
      ESPData1: data.data1,
      ESPData2: data.data2,
      ESPData3: data.data3,
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

export default miscRoutes;
