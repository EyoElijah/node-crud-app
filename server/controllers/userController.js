const User = require("../models/User");

// create new user
async function createUser(req, res) {
	// validate request
	if (!req.body) {
		return res.status(400).send({ message: "content cannot be empty" });
	}
	//new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		gender: req.body.gender,
		status: req.body.status,
	});

	try {
		const savedUser = await user.save();
		// res.send(savedUser).status(200);
		res.redirect("/add-user");
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
}

// retrieve and return all users/ retrieve and return a single user
async function findUser(req, res) {
	if (req.query.id) {
		const id = req.query.id;
		try {
			const user = await User.findById(id);
			res.status(200).send(user);
		} catch (error) {
			res.status(500).send({ message: error.message || "Not Found" });
		}
	} else {
		try {
			const user = await User.find({});
			res.status(200).send(user);
		} catch (error) {
			res.status(500).send({ message: error.message || "Error while retrieving user" });
		}
	}
}

// update user by user id
async function updateUser(req, res) {
	if (!req.body) {
		return res.status(404).send({ message: "Data to update cannot be empty" });
	}
	const id = req.params.id;
	try {
		const user = await User.findByIdAndUpdate(id, req.body, { new: true });
		if (!user) {
			return res.status(400).send({ message: `cannot update user with ${id}` });
		}
		res.send(user).status(200);
	} catch (err) {
		res.status(500).send({ message: err.message || "user not found with id" });
	}
}

// delete user with specified id
async function deleteUser(req, res) {
	const id = req.params.id;
	try {
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			res.status(404).send({ message: "cannot delete user that " + id });
		}
		res.send({ message: "user was successfully deleted" });
	} catch (err) {
		res.status(500).send({ message: `Could not delete user with ${id}` });
	}
}

module.exports = { createUser, findUser, updateUser, deleteUser };
