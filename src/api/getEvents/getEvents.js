const { dbReq } = require("../../lib/modules/mysql");

module.exports = async () => {
  const value = await dbReq(
    `SELECT id, author, photo, name, date, description, createdDate, eventType, projectBase, source, dateEnd, author_login, timeStart, hasMinted FROM events WHERE dateEnd >= ${Date.now()} AND isModer = 1 ORDER BY date ASC`
  );
  return value;
};
