import express from "express";
import {  getAllEmployee, createEmployee,getEmployeeById,deleteEmployee, editEmployeeDetails} from "../controllers/EmployeeController.js";
import { Router } from "express";



const router = Router();

router.post("/employee/addEmployee",createEmployee);
router.get("/employee/:employeeId",getEmployeeById);
router.delete("/employee/:employeeId",deleteEmployee);
router.patch("/employee/:employeeId",editEmployeeDetails);
router.get("/employee",getAllEmployee);


export default router;