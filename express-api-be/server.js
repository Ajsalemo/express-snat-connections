import express, { json, urlencoded } from "express";
const app = express();
const port = process.env.PORT || 3000;
// Controllers
import { catchAllController } from "./controllers/catchAllController.js";
import { homeController } from "./controllers/homeController.js";
import { pongController } from "./controllers/pongController.js";

// This replaced using bodyParser which was added in express v4.16.0 and higher
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
// Controllers to use with routing
// Standard controllers
app.use("/api/pong", pongController);
app.use(homeController);
// Catches all non matching routes and redirects it back to the root - must be placed last in the chain of middleware
app.use(catchAllController);

try {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  console.log(`An error has occurred: ${error}`);
}
