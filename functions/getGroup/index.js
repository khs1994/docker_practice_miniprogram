// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  console.log(event.group);

  return event.group.data.openGId;
};
