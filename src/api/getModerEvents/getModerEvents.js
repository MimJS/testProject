const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token }) => {
  if (!token) {
    return false;
  }
  const isUser = await getAuth({ token });
  if (isUser && isUser.isAdmin == 1) {
    const value = await dbReq(`SELECT * FROM events WHERE isModer = 0 AND dateEnd >= ${Date.now()}`);
    if (value) {
      return value;
    } else {
      return false;
    }
  } else {
    return false;
  }
  return;
};
