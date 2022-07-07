const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token }) => {
  if (!token) {
    return false;
  }
  const isUser = await getAuth({ token });
  if (isUser) {
    const value = await dbReq(
      `SELECT id,login,mail,createdDate,isAdmin,name,surname,nickname,projectPresent,public_mail FROM users`
    );
    if (value) {
      return value;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
