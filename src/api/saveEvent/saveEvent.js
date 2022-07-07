const { dbReq } = require("../../lib/modules/mysql");
const getAuth = require("../getAuth/getAuth");

module.exports = async ({ token, id }) => {
  if (!id || !token) {
    return false;
  }
  const isUser = await getAuth({ token }).catch((e) => false);
  if (isUser) {
    let preferIds = JSON.parse(isUser.preferIds);
    if (preferIds.includes(id)) {
      const idIndex = preferIds.indexOf(id);
      preferIds.splice(idIndex, idIndex + 1);
    } else {
      preferIds.push(id);
    }
    preferIds = JSON.stringify(preferIds);
    const value = await dbReq(
      `UPDATE users SET preferIds = '${preferIds}' WHERE token = '${token}'`
    );
    if (value) {
      return preferIds;
    } else {
      console.log(value);
      return false;
    }
  } else {
    console.log(isUser);
    return false;
  }
};
