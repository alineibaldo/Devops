const request = require("supertest");
const app = require("../src/app");

describe("User Controller", () => {
  it("GET /users deve retornar 200", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /users deve criar um usuário", async () => {
    const res = await request(app).post("/users").send({ name: "Bob", email: "bob@test.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("POST /users deve retornar erro se faltar campos", async () => {
    const res = await request(app).post("/users").send({ name: "SemEmail" });
    expect(res.statusCode).toBe(400);
  });
});

