// 引入模型
const { createM, listM, delM, upM } = require(process.cwd() + "/Models/bill");

/**
 * @api {post} /add  登录或注册
 * @apiName initUser
 * @apiGroup login
 * @apiParam {String} users 用户名
 * @apiParam {String} explanation  说明
 * @apiSuccess {String} money  金额
 * @apiSuccess {String} surplus 剩余金额
 */
const addList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let rs = await createM(postData);
  if (rs) {
    // console.log(rs);
    // 发送到浏览器
    res.send({
      meta: { status: 200, msg: "添加成功" },
      data: rs,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "添加失败" },
      data: null,
    });
  }
};

const delList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let data = await delM(postData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "删除成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "删除失败" },
      data: null,
    });
  }
};

const upList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let data = await upM(postData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "修改成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "修改失败" },
      data: null,
    });
  }
};

const readList = async (req, res) => {
  let getData = req.query;
  // console.log(getData);
  let data = await listM(getData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "查询成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "查询失败" },
      data: null,
    });
  }
};
// 导出
module.exports = {
  addList,
  delList,
  upList,
  readList,
};
