import express from "express";
import { updateFile } from "../controllers/files.js";

const router = express.Router();

router.post("/update/:classID",updateFile);

export default router;
