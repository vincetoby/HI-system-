import HISController from "../controllers/HIS.controller.js";
import authenticateHospital from "../middleware/authonticationhospital.js";
import  Router  from "express";
const router = Router();

router.post("/register", HISController.signup);
 router.post("/login",HISController.loginHospital); //
 
export default router;