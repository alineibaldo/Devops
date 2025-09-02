const express = require("express");
const userRoutes = require("./routes/userroutes");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
