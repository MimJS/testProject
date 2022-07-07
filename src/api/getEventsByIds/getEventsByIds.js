const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token, ids }) => {
  if (!ids) {
    return false;
  }
  if (token) {
    const isUser = await getAuth({ token });
    console.log(isUser);
    if (isUser && isUser.isAdmin == 1) {
      const idsArray = ids.toString();
      console.log(idsArray);
      const value = await dbReq(
        `SELECT * FROM events WHERE id IN (${idsArray}) AND date >= ${Date.now()} ORDER BY date ASC`
      );
      if (value) {
        console.log(value);
        return value;
      } else {
        console.log(value);
        return false;
      }
    }
  }
  const idsArray = ids.toString();
  const value = await dbReq(
    `SELECT id, author, photo, name, date, description, createdDate, eventType, projectBase, source, dateEnd, author_login, timeStart, hasMinted FROM events WHERE id IN (${idsArray}) AND dateEnd >= ${Date.now()} AND isModer = 1 ORDER BY date ASC`
  );
  if (value) {
    console.log(value);
    return value;
  } else {
    console.log(value);
    return false;
  }
};
