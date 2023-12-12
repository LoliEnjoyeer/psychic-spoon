import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: String,
  date: mongoose.Schema.Types.Mixed,
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
  ESPtemperature: Number,
  ESPslpressure: Number,
  ESPrain: Number,
});

const ESPDataModel = mongoose.model(
  "LatestESPData",
  ESPDataSchema,
  "DeviceData"
);

const DataAlertsSchema = mongoose.Schema({
  dataType: String,
  reason: String,
  value: Number,
  alertDate: mongoose.Schema.Types.Mixed,
});

const DataAlertsModel = mongoose.model(
  "AlertReport",
  DataAlertsSchema,
  "Alert"
);

const IoTDeviceSchema = mongoose.Schema({
  deviceName: String,
  ip: String,
  location: String,
  isConnected: Boolean,
  lastSeen: mongoose.Schema.Types.Mixed,
});

const IoTDeviceModel = mongoose.model(
  "IoTDevice",
  IoTDeviceSchema,
  "IoTDevice"
);

export { userModel, ApiModel, ESPDataModel, DataAlertsModel, IoTDeviceModel };
