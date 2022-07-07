const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token, id, action }) => {
  if (!token || !id || !action) {
    return false;
  }
  const isUser = await getAuth({ token });
  if (isUser && isUser.isAdmin == 1) {
    if (action == "accept") {
      const value = await dbReq(`UPDATE events SET isModer = 1 WHERE id=${id}`);
      if (value) {
        const count = await dbReq(
          `SELECT id FROM events WHERE isModer = 0 AND dateEnd >= ${Date.now()}`
        );
        return count.length;
      } else {
        return false;
      }
    }
    if (action == "deny") {
      const value = await dbReq(`DELETE FROM events WHERE id=${id}`);
      if (value) {
        const count = await dbReq(
          `SELECT id FROM events WHERE isModer = 0 AND dateEnd >= ${Date.now()}`
        );
        return count.length;
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
  return;
};
