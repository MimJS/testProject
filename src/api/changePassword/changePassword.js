const md5 = require("md5");
const { dbReq } = require("../../lib/modules/mysql");
const { getRandomString } = require("../../lib/modules/utils");

module.exports = async ({ token, data }) => {
  if (!token || !data || !data.oldPassword || !data.newPassword) {
    return false;
  }
  console.log(data);
  const isUser = await dbReq(`SELECT * FROM users WHERE token='${token}'`);
  if (isUser) {
    if (md5(data.oldPassword) != isUser[0].password) {
      return { status: false, msg: "Current password isn't correct" };
    } else {
      const token = await getRandomString(128);
      const value = await dbReq(
        `UPDATE users SET password='${md5(
          data.newPassword
        )}', token='${token}' WHERE id=${isUser[0].id}`
      );
      if (value) {
        return token;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
