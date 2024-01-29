require("dotenv").config();

const express = require("express");
const app = express();
const AuthRouter = require("./router/auth-router");
const cors = require("cors");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/api/auth", AuthRouter);
app.use("/api/form/", contactRouter);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
