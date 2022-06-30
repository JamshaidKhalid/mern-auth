const mongoose = require("mongoose");
const uri = `mongodb+srv://admin:admin123@cluster0.tvcmj.mongodb.net/studentsLogin?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected successfully");
      });
  } catch (error) {
    console.log(`somer error occur ${error}`);
  }
};

module.exports = connectDB;
