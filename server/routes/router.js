const express = require("express");
const route = express.Router();
const { homeRoute, addUserRoute, updateUserRoute } = require("../services/render");

const { createUser, findUser, updateUser, deleteUser } = require("../controllers/userController");
/**
 * @description Root Route
 * @method GET /
 */
route.get("/", homeRoute);
/**
 * @description add user Route
 * @method GET /add-user
 */
route.get("/add-user", addUserRoute);
/**
 * @description update User Route
 * @method GET /update-user
 */
route.get("/update-user", updateUserRoute);

// APIs
route.post("/api/users", createUser);
route.get("/api/users", findUser);
route.put("/api/users/:id", updateUser);
route.delete("/api/users/:id", deleteUser);

module.exports = route;
