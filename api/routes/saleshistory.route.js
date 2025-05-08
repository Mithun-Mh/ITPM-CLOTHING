import express from "express";
import {
  createSalesHistory,
  getSalesHistories,
} from "../controllers/saleshistory.controller.js";

const router = express.Router();

router.post("/add", createSalesHistory);
router.get("/get", getSalesHistories);

export default router;
