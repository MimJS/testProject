const mysql = require("mysql2/promise");
const { mysqlData } = require("../cfgs/config.mysql");

const data = {
  isRun: false,
  isErrorConnection: false,
  db: null,
};

let { isRun, db, isErrorConnection } = data;

const createConnection = async (callback) => {
  if (isRun || db) {
    isRun = false;
    db = null;
    console.log(`Delete mysql connection.`);
  }
  console.log(`Try to create mysql connection.`);
  const con = await mysql.createConnection(mysqlData);
  if (con) {
    db = con;
    isRun = true;
    supportMysql();
    return callback();
  } else {
    isErrorConnection = true;
    console.log(`Error connection false`);
    errorConnectionResolve();
    return false;
  }
};

const dbReq = async (sql) => {
  if (!isRun) {
    return { status: false };
  }
  const [rows] = await db.execute(sql);
  return rows;
};

const errorConnectionResolve = async () => {
  setTimeout(() => {
    createConnection();
  }, 10000);
};

const supportMysql = () => {
  if (isRun) {
    setTimeout(async () => {
      console.log(`MYSQL live support`);
      const [rows, fields] = await db.execute(
        "SELECT value FROM `technical` WHERE `id` = ?",
        [1]
      );
      supportMysql();
    }, 30000);
  }
};

module.exports = {
  createConnection,
  dbReq,
};
