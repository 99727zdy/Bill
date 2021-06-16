const express = require("express");
let app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
const billController = require(process.cwd() + "/Controllers/bill");
const userController = require(process.cwd() + "/Controllers/user");


//设置跨域访问
app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", " 3.2.1");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-requested-with,Authorization,token, content-type"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.post("/api/v1/bill/add", billController.addList);
app.post("/api/v1/bill/del", billController.delList);
app.post("/api/v1/bill/up", billController.upList);
app.get("/api/v1/bill/read", billController.readList);


app.post("/api/v1/users/add", userController.addList);
app.post("/api/v1/users/del", userController.delList);
app.post("/api/v1/users/up", userController.upList);
app.get("/api/v1/users/read", userController.readList);

app.listen("3000", () => {
  console.log("http://localhost:3000");
});
