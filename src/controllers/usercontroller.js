const userService = require("../services/userservice");

function getUsers(req, res) {
  const users = userService.getAllUsers();
  res.json(users);
}

function createUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Campos obrigatórios" });
  const user = userService.createUser(name, email);
  res.status(201).json(user);
}

module.exports = { getUsers, createUser };
