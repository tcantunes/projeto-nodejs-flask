const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("../src/routes/userRoutes");
const User = require("./models/User");
const PORT = 3000;
require("dotenv").config();

const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${dbHost}:${dbPassword}@cluster0.77xbloc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Conexão estabelecida com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar", error);
  });

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      return res.status(200).json({ message: "Seu login foi realizado com sucesso!" });
    } else {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.get("/login-page", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}`);
});
