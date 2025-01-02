import { Department } from "../models/DepartmentModel";


const createDepartment = async(req,res) => {
    const {departmentId, department_name, status} = req.body;
     
      try{
        const newEmployee = await Department.create(
          {departmentId, department_name,status}
        );
          handleResponse(res,201,"New Employee Added",newEmployee);
        
      }catch(err){
        res.status(500).json({err: err.message });
      }
    };
    
    const getAllDepartment =  async (req, res) => {
        try {
            const department = await Department.findAll();
            handleResponse(res,200,"All Department",department);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }; 
    
    export { createDepartment, getAllDepartment};