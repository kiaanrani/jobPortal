import express from "express";
import { createDepartment, getAllDepartment } from "../controllers/DepartmentController";
import { Router } from "express";



const router = Router();

router.post("/department/addDepartment",createDepartment);
router.get("/department/allDepartment",getAllDepartment);
// router.delete("/employee/:employeeId",deleteEmployee);
// router.patch("/employee/:employeeId",editEmployeeDetails);
// router.get("/employee",getAllEmployee);


export default router;