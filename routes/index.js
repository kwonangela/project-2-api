import { Router } from "express";
import characterRoutes from "./characters.js"

const router = Router();

router.get("/", (req, res) => {
    res.send("This is the api root.");
});

router.use("/characters", characterRoutes);

export default router;