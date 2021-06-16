const mongoose = require("mongoose");
const moment = require("moment");

// https://cloud.mongodb.com/v2/60af0301f45d634e44fdfadc#metrics/replicaSet/60af0561694cb359d19b7fc8/explorer/myFirstDatabase/billlists/find

// 连接数据库
// const url =
//   "mongodb+srv://8963:8963@bill.tgnxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const url = "mongodb://zy:zy3280@localhost:27017/bill";
const db = mongoose.createConnection(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("连接成功");
  }
);

module.exports = {
  db,
  moment,
};
