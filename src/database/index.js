import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://ankitverma2k6:00ankit00@2024@cluster0.imb1la1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(url)
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
