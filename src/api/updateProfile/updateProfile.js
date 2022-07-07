const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token, profileData }) => {
  if (!token || !profileData) {
    return false;
  }
  const isUser = await getAuth({ token });
  if (isUser) {
    const { name, surname, projectPresent, mail, nickname } = profileData;
    const value = await dbReq(
      `UPDATE users SET name='${name}', surname='${surname}', projectPresent='${projectPresent}', public_mail='${mail}', nickname='${nickname}' WHERE token='${token}'`
    );
    if (value) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
