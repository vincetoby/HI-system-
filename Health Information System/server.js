import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routes/HIS.route.js";
import errorhandling from "./middleware/errorhandler.js";
import routerV from "./routes/vendor.js";
import Hrouter from "./routes/hosiptal.routes.js"; // Corrected the spelling
import cookieParser from "cookie-parser";
import cors from "cors";
import pages from "./pages.js";

const app = express();

const port = 3000;
const db = "mongodb://0.0.0.0:27017/Healthcare"; // Changed to IPv4

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("components"));

app.use(pages);
app.use(router);
app.use(routerV);
app.use(Hrouter);

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("connected to db");
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}).catch((err) => {
  console.log(err);
});