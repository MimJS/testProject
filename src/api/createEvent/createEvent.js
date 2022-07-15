const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ eventData, token }) => {
  if (!eventData || !token || typeof eventData != "object") {
    return false;
  }
  const isUser = await getAuth({ token }).catch((e) => false);
  if (isUser) {
    let {
      author,
      name,
      description,
      date: { startDate, endDate },
      photo,
      source,
      twitter,
      eventType,
      projectBase,
      timeStart,
      hasMinted,
      photoType,
      photoUrl,
    } = eventData;
    let timeStartDate = null;
    if (timeStart) {
      const date = new Date();
      date.setUTCHours(timeStart.hours || 0, timeStart.minutes || 0, 0, 0);
      timeStartDate = date.getTime();
    }
    const eventDateStart = new Date(startDate);
    eventDateStart.setUTCHours(23, 59, 59, 58);
    const eventDateEnd = new Date(endDate);
    eventDateEnd.setUTCHours(23, 59, 59, 58);
    name = name.replace("'", "\'").replace('"', '\"').replace("`", "\`");
    description = description
      .replace("'", "\'")
      .replace('"', '\"')
      .replace("`", "\`");
    author = author.replace("'", "\'").replace('"', '\"').replace("`", "\`");
    const value = await dbReq(
      `INSERT INTO events (author,photo,name,date,description,createdDate,author_login,source,twitter,eventType,projectBase, isModer, dateEnd, timeStart, hasMinted) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        author,
        photoType == "file" ? photo : photoUrl,
        name,
        eventDateStart.getTime(),
        description,
        Date.now(),
        isUser.login,
        source,
        twitter,
        eventType.toLowerCase(),
        projectBase.toLowerCase(),
        isUser.isAdmin,
        eventDateEnd.getTime(),
        timeStartDate,
        hasMinted.toLowerCase(),
      ]
    );
    if (value) {
      return true;
    } else {
      console.log(value);
      return false;
    }
  } else {
    console.log(isUser);
    return false;
  }
};
