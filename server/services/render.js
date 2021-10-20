const axios = require("axios");

async function homeRoute(req, res) {
	try {
		const response = await axios.get("http://localhost:5000/api/users");
		res.render("index", { users: response.data });
	} catch (err) {
		res.send(err);
	}
}

async function addUserRoute(req, res) {
	res.render("add_User");
}

async function updateUserRoute(req, res) {
	try {
		const response = await axios.get("http://localhost:5000/api/users", { params: { id: req.query.id } });
		res.render("update_user", { user: response.data });
	} catch (err) {
		res.send(err);
	}
}
module.exports = { homeRoute, addUserRoute, updateUserRoute };
