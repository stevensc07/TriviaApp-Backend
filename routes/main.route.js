import { Router } from "express";
import { test } from "../controllers/main.controller.js";
import auth_router from "./auth.route.js";

const router = Router();

router.get("/test", test);

router.use("/auth", auth_router);

//router.use('/question', valid_token, )

//router.use('/score', valid_token, )

export default router;
