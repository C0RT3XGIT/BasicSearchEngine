const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://CompassUser:4x7lrjx40d3EHscA@cluster0.zgm4g.mongodb.net/DataSet?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: false,
// });

// // Checking if connection is done
// mongoose.connection.on("connected", () =>
//   console.log("Mongoose is connected !")
// );

module.exports = connectDB;
