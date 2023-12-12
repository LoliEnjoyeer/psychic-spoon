import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:123@maindatabase.uuetmec.mongodb.net/IoTDevices?retryWrites=true&w=majority"
);

const db = mongoose.connection;
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
};

export { db, dateOptions };
