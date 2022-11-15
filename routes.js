import { Router } from "express";
import { getMovements } from "./controllers.js";
const router = Router();

router.get("/:username", getMovements);

export default router;
1