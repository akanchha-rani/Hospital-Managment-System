import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT",
    })
    .then(() => {
      console.log("Database successully connected!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
