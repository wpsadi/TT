import {Router} from "express";

const route = Router();

route.get("/:sem/:code",(req,res)=>{
    try{
        let {sem,code} = req.params;

        try{
            sem = Number(sem);
        }catch(e){
            res.status(400).json({
                status:400,
                result:"Semester should be a number"
            })
            return;
        }

        code = code.trim();

        


        
    }
    catch(e){
        res.status(404).json({
            status:404,
            result:e.message
        })
    }
})

export default route;