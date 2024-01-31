import sem1 from "../resource/subName/sem1.js";


function CalcSubArray(obj){
    let x = Object.keys(obj)
    return x.slice(0,x.length-1)
}

function SubArray(number){
    // console.log(num,"resp")
    let resp = new Array()
    switch(number){
        case 1:
            resp = CalcSubArray(sem1)
            break;
    }
    
    if (resp == undefined){
        return new Array();
    }
    else{
        return resp;
    }
}

export default SubArray