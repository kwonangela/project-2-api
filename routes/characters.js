import { Router } from "express";
import * as controllers from "../controllers/characters.js";

const router = Router();

router.get("/", controllers.getChars);
router.get("/:id", controllers.getChars);
router.post("/", controllers.createChar);
router.put("/:id", controllers.updateChar);
router.delete("/:id", controllers.deleteChar);

export default router;