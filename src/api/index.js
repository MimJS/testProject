const changePassword = require("./changePassword/changePassword");
const createEvent = require("./createEvent/createEvent");
const deleteEvent = require("./deleteEvent/deleteEvent");
const getAllUsers = require("./getAllUsers/getAllUsers");
const getAuth = require("./getAuth/getAuth");
const getEvents = require("./getEvents/getEvents");
const getEventsByIds = require("./getEventsByIds/getEventsByIds");
const getModerEvents = require("./getModerEvents/getModerEvents");
const getReg = require("./getReg/getReg");
const moderContent = require("./moderContent/moderContent");
const saveEvent = require("./saveEvent/saveEvent");
const updateProfile = require("./updateProfile/updateProfile");

const error = { status: false };

const resolveRequest = (req, res) => {
  const { action, payload } = req.body;
  const actionList = [
    "getEvents",
    "getAuth",
    "getReg",
    "saveEvent",
    "getEventsByIds",
    "createEvent",
    "getModerEvents",
    "moderContent",
    "deleteEvent",
    "updateProfile",
    "getAllUsers",
    "changePassword",
  ];
  if (!action || !payload || !actionList.includes(action)) {
    res.sendStatus(503);
    return;
  }
  if (action == "getEvents") {
    getEvents()
      .then((r) => res.send({ status: true, data: r }))
      .catch((e) => res.send(error));
    return;
  }
  if (action == "getAuth") {
    getAuth(payload)
      .then((r) => {
        if (r) {
          if (r?.status) {
            res.send(r);
          } else {
            res.send({ status: true, data: r });
          }
        } else {
          console.log(r);
          res.send({ status: false, msg: "Почта или пароль не правильная" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
    return;
  }
  if (action == "getReg") {
    getReg(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Произошла ошибка" });
        }
      })
      .catch((e) => res.send(error));
  }
  if (action == "saveEvent") {
    saveEvent(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "getEventsByIds") {
    getEventsByIds(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "createEvent") {
    createEvent(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true });
        } else {
          res.send({ status: false, msg: "Повторите запрос чуть позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "getModerEvents") {
    getModerEvents(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "moderContent") {
    moderContent(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "deleteEvent") {
    deleteEvent(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "updateProfile") {
    updateProfile(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "getAllUsers") {
    getAllUsers(payload)
      .then((r) => {
        if (r) {
          res.send({ status: true, data: r });
        } else {
          res.send({ status: false, msg: "Попробуйте позже" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
  if (action == "changePassword") {
    changePassword(payload)
      .then((r) => {
        if (r) {
          console.log(r);
          if (r?.msg) {
            return res.send(r);
          } else {
            return res.send({ status: true, data: r });
          }
        } else {
          console.log(r);
          res.send({ status: false, msg: "Произошла ошибка" });
        }
      })
      .catch((e) => console.log(e) & res.send(error));
  }
};

module.exports = resolveRequest;
