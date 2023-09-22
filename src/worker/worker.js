/*
 * @Author: Ren Bing
 * @Date: 2023-08-23 17:18:59
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-08-23 17:35:51
 * @Description: 请填写简介
 */
addEventListener('message', function () {
  const { data } = e;
  console.log(e, "message222", e.data)
  switch (data.route) {
    case "end":
      self.close();
      break;
    default:
      console.log("default");
  }

}, false);
