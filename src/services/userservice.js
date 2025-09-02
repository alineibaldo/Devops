let users = [];

function getAllUsers() {
  return users;
}

function createUser(name, email) {
  const user = { id: users.length + 1, name, email };
  users.push(user);
  return user;
}

module.exports = { getAllUsers, createUser };
