const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token, id }) => {
  if (!token || !id) {
    return false;
  }
  const isUser = await getAuth({ token });
  if (isUser) {
    if (isUser.isAdmin == 1) {
      const value = await dbReq(`DELETE FROM events WHERE id=${id}`);
      if (value) {
        return true;
      } else {
        return false;
      }
    }
    const eventAuthor = await dbReq(
      `SELECT author_login FROM events WHERE id=${id}`
    );
    if (eventAuthor[0].author_login == isUser.login) {
      const value = await dbReq(`DELETE FROM events WHERE id=${id}`);
      if (value) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};
