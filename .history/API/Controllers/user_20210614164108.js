// 引入模型
const { createM, listM, delM, upM } = require(process.cwd() + "/Models/user");

/**
 * @api {post} /users/add  新增用户
 * @apiName addList
 * @apiGroup users
 * @apiParam {String} user 账号
 * @apiParam {String} pass 密码
 * @apiParam {String} remarks 备注
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
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

/**
 * @api {post} /users/del  删除用户
 * @apiName delList
 * @apiGroup users
 * @apiParam {String} _id ID
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
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

/**
 * @api {post} /users/add  修改用户
 * @apiName addList
 * @apiGroup users
 * @apiParam {String} _id ID
 * @apiParam {String} user 账号
 * @apiParam {String} pass 密码
 * @apiParam {String} remarks 备注
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
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

/**
 * @api {post} /users/add  查询用户
 * @apiName readList
 * @apiGroup users
 * @apiParam {String} user 账号
 * @apiParam {String} pass 密码
 * @apiParam {String} remarks 备注
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
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
