const mongoose = require("mongoose");
const { dbUrl } = require("../config");

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
module.exports = db;
