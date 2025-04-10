import { Router } from "express";
const router = Router();
// Catches all non matching routes and redirects it back to the root
export const catchAllController = router.get(/(.*)/, (_, res, next) => {
  try {
    res.redirect("/");
  } catch (error) {
    console.log("An error has occurred: ", error)
    next(error)
  }
});

export default catchAllController;
