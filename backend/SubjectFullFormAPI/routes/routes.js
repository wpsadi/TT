import { Router } from "express";
import sem1 from "../resource/subName/sem1.js";
import detSem1 from "../resource/DetailsSubject/sem1.js";
import SubArray from "../utility/getArraySubjet.js";

const route = Router();

route.get("/:sem/:code/details", (req, res) => {
    try {
        let { sem, code } = req.params;

        if (!isNaN(Number(sem))) {
            sem = Number(sem)
            let resp;
            switch (sem) {
                case 1:
                    resp = detSem1[`${(code.trim()).toUpperCase()}`]
                    break;//add other subjects also
            }


            if (resp == undefined){
                res.status(404).json({
                    status:false,
                    sem:sem,
                    result:"Subject Not Found"
                })
            }
            else{
                res.status(200).json({
                    status:true,
                    sem:sem,
                    result:resp
                }) 
            }

        }
        else {
            res.status(400).json({
                status: 400,
                result: "Semester should be a number"
            })
        }

    }
    catch (e) {
        res.status(404).json({
            status: 404,
            result: e.message
        })
    }
})

route.get("/:sem/:code", (req, res) => {
    try {
        let { sem, code } = req.params;

        if (!isNaN(Number(sem))) {
            sem = Number(sem)
            let resp;
            switch (sem) {
                case 1:
                    resp = sem1[`${(code.trim()).toUpperCase()}`]
                    break;//add other subjects also
            }


            if (resp == undefined){
                res.status(404).json({
                    status:false,
                    sem:sem,
                    result:"Subject Not Found"
                })
            }
            else{
                res.status(200).json({
                    status:true,
                    sem:sem,
                    result:resp
                }) 
            }

        }
        else {
            res.status(400).json({
                status: 400,
                result: "Semester should be a number"
            })
        }

    }
    catch (e) {
        res.status(404).json({
            status: 404,
            result: e.message
        })
    }
})

route.get("/:sem", (req, res) => {
    try {
        let { sem } = req.params;
        sem = Number(sem);

        if (!isNaN(sem)) {
            //here i need to add few more options
            let resp;

            resp = SubArray(sem);
            // console.log(resp)
            if (resp == undefined){
                res.status(404).json({
                    status:false,
                    sem:sem,
                    result:"Please enter a valid Semester!"
                })
            }
            else{
                res.status(200).json({
                    status:true,
                    sem:sem,
                    result:resp
                }) 
            }

        } else {
            res.status(400).json({
                status: 400,
                result: "Semester should be a number"
            })
            return;
        }
    }
    catch (e) {
        res.status(404).json({
            status: 404,
            result: e.message
        })
    }
})



export default route;