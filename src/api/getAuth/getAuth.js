const { dbReq } = require("../../lib/modules/mysql");
const md5 = require("md5");

module.exports = async ({ mail, password, token }) => {
  if (token) {
    let value = await dbReq(
      `SELECT login, mail, public_mail, preferIds, token, createdDate, isAdmin, nickname, name, surname, projectPresent FROM users WHERE token='${token}'`
    );
    if (value[0] && value[0].isAdmin == 1) {
      const count = await dbReq(
        `SELECT id FROM events WHERE isModer = 0 AND dateEnd >= ${Date.now()}`
      );
      value[0].count = count.length;
    }
    return value[0];
  }
  let value = await dbReq(
    `SELECT login, mail, public_mail, preferIds, token, createdDate, isAdmin, nickname, name, surname, projectPresent FROM users WHERE mail = '${mail}' and password = '${md5(
      password
    )}'`
  );
  if (value[0] && value[0].isAdmin == 1) {
    const count = await dbReq(
      `SELECT id FROM events WHERE isModer = 0 AND dateEnd >= ${Date.now()}`
    );
    value[0].count = count.length;
  }
  console.log(value);
  return value[0];
};
