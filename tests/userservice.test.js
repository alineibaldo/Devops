const userService = require("../src/services/userservice");

describe("User Service", () => {
  it("deve criar um usuário", () => {
    const user = userService.createUser("Alice", "alice@test.com");
    expect(user).toHaveProperty("id");
    expect(user.name).toBe("Alice");
  });

  it("deve retornar todos os usuários", () => {
    const users = userService.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
