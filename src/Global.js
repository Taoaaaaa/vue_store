/*
 * @Description: 全局变量
 * @Author: Tao
 * @Date: 2022-02-13 13:40:18
 * @LastEditors: Tao
 * @LastEditTime: 2020-02-22 01:41:50
 */
exports.install = function (Vue) {
  //Vue.prototype.$target = "http://47.115.85.237:3000/"; // 线上后端地址
   Vue.prototype.$target = "http://localhost:8080/"; // 本地后端地址
  // 封装提示成功的弹出框
  Vue.prototype.notifySucceed = function (msg) {
    this.$notify({
      title: "成功",
      message: msg,
      type: "success",
      offset: 100
    });
  };
  // 封装提示失败的弹出框
  Vue.prototype.notifyError = function (msg) {
    this.$notify.error({
      title: "错误",
      message: msg,
      offset: 100
    });
  };
}