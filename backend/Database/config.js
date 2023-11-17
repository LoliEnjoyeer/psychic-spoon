import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:123@maindatabase.uuetmec.mongodb.net/IoTDevices?retryWrites=true&w=majority"
);

const db = mongoose.connection;

export { db };
