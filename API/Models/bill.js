const { db, moment } = require(process.cwd() + "/Models/db");

// 创建账单:
// operation:收入T\支出F
// date:时间
// users人物,explanation说明,money金额,surplus剩余金额
const billModel = db.model("bill", {
  operation: { type: Boolean, default: true },
  date: {
    type: String,
    default: () => moment(new Date()).format("YYYY-MM-DD"),
  },
  createDate: {
    type: String,
    default: () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  },
  users: String,
  explanation: String,
  money: Number,
  surplus: Number,
});

// 增
const createM = (postData) => {
  // console.log(postData);
  // 实例化
  const insertObj = new billModel(postData);
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
  return billModel
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
  // console.log(getData);
  let id = { _id: postData._id };
  return billModel.deleteMany(id, function (err) {
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
  return billModel.updateOne(id, postData, {}, (err, data) => {
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
