import { Router } from "express";
const router = Router();

export const pongController = router.get("/", (_, res) => {
  try {
    res.json({ message: "pong" });
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

