require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const courseRoute = require("./router/course-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleWare = require("./middlewares/error-middleware");

// Middleware cors giving permission
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json()); // parse incoming requests with json
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", courseRoute);

// defining admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleWare);

const port = 5000;
connectDb()
  .then((result) => {
    app.listen(port, () => console.log(`Server is running on ${port}`));
  })
  .catch((err) => {
    console.error(err);
  });

// router > controllers
