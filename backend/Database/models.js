import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: String,
  date: Date,
  logged: Boolean,
  password: String,
});

const userModel = mongoose.model("User", userSchema, "User");

const ApiSchema = mongoose.Schema({
  id: mongoose.Schema.Types.Mixed,
  method: mongoose.Schema.Types.Mixed,
  path: mongoose.Schema.Types.Mixed,
  statusCode: mongoose.Schema.Types.Mixed,
  timestamp: mongoose.Schema.Types.Mixed,
  ip: mongoose.Schema.Types.Mixed,
});

const ApiModel = mongoose.model("ApiLog", ApiSchema, "APIRequestLog");

const ESPDataSchema = mongoose.Schema({
  ESPData1: String,
  ESPData2: String,
  ESPData3: String,
});

const ESPDataModel = mongoose.model(
  "LatestESPData",
  ESPDataSchema,
  "DeviceData"
);

export { userModel, ApiModel, ESPDataModel };
