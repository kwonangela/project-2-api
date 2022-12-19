import { Router } from "express";
import contRoutes from "./continents.js";
import characterRoutes from "./characters.js"

const router = Router();

router.get("/", (req, res) => {
    res.send("This is the api root.");
});

router.use("/characters", characterRoutes);
router.use("/continents", contRoutes);

export default router;