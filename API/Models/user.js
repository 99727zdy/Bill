const { db, moment } = require(process.cwd() + "/Models/db");

// 创建用户表:user用户名,密码pass,备注remarks
const userModel = db.model("user", {
  date: {
    type: String,
    default: () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  },
  user: String,
  pass: String,
  remarks: { type: String, default: "无" },
});

// 增
const createM = (postData) => {
  // console.log(postData);
  // 实例化
  const insertObj = new userModel(postData);
  // 添加到数据库
  return insertObj
    .save()
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
// 查
const listM = (getData) => {
  // console.log(getData);
  return userModel
    .find(getData)
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};
// 删
const delM = (postData) => {
  // console.log(postData);
  let id = { _id: postData._id };
  return userModel.deleteMany(id, function (err) {
    if (err) {
      console.log(err);
    }
    // console.log('删除成功');
  });
};
// 改
const upM = (postData) => {
  let id = { _id: postData._id };
  // console.log(id);
  return userModel.updateOne(id, postData, {}, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      // console.log(data);
    }
  });
};

// 导出模型方法
module.exports = {
  createM,
  listM,
  upM,
  delM,
};
