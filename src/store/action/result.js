import * as actionTypes from "./actionTypes";

const saveResult=(submit)=>{
    return{
        type:actionTypes.TOSTORE,
        submit:submit
    }
}
 
export const store=(submit)=>{
    return dispatch=> {
        setTimeout (()=>{dispatch(saveResult(submit))},2000)
    }
}
       
    
export const remove=(removeId)=>{
    return {
        type:actionTypes.TODELETE,
        resultElId:removeId

    }
} 