import { Router } from "express";
import { axiosInstance } from "../config/axiosInstance.js";
const router = Router();

export const pingController = router.get("/", async (_, res, next) => {
  try {
    const { data } = await axiosInstance.get("/api/pong")
    res.json(data);
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});
