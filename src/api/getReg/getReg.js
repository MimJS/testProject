const md5 = require("md5");
const { dbReq } = require("../../lib/modules/mysql");
const { getRandomString } = require("../../lib/modules/utils");

module.exports = async ({ mail, password }) => {
  if (!mail || !password) {
    return false;
  }
  mail = mail.toLowerCase();
  const token = getRandomString(128);
  const regTime = Date.now();
  const value = await dbReq(`SELECT id FROM users WHERE mail='${mail}'`);
  if (value[0]) {
    return { status: false, msg: "Почта уже кем-то занята" };
  }
  const lastId = await dbReq(`SELECT MAX(id) FROM users`);
  console.log(lastId);
  await dbReq(
    `INSERT INTO users (login, mail, public_mail, password, token, preferIds, createdDate, nickname) VALUES ('${
      mail.split("@")[0]
    }','${mail}', '${mail}', '${md5(
      password
    )}', '${token}', '[]', ${regTime}, 'user${Number(
      lastId[0]["MAX(id)"] + 1
    )}')`
  );
  return {
    name: "",
    surname: "",
    projectPresent: "",
    public_mail: mail,
    nickname: `user${Number(lastId[0]["MAX(id)"] + 1)}`,
    mail,
    token,
    regTime,
    preferIds: "[]",
  };
};
