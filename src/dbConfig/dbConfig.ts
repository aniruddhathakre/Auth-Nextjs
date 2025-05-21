import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected succesfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MoboDB connection error. Please make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something got wrong!");
    console.log(error);
  }
}
