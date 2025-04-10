import express, { json, urlencoded } from "express";
import { cpus } from "os";
const app = express();
const port = process.env.PORT || 3000;

// Controllers
import { catchAllController } from "./controllers/catchAllController.js";
import { homeController } from "./controllers/homeController.js";
import { pingController } from "./controllers/pingController.js";

// Other middleware
// This replaced using bodyParser which was added in express v4.16.0 and higher
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

// Standard controllers
app.use("/api/ping", pingController);
app.use(homeController);
// Catches all non matching routes and redirects it back to the root - must be placed last in the chain of middleware
app.use(catchAllController);

try {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log(
      `There is ${cpus().length
      } cores available to spawn node processes on`
    );
  });
} catch (error) {
  console.log(`An error has occurred ${error}`);
}
