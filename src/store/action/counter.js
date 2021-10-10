import * as actionType from "./actionTypes";
export const increment =()=>{
    return {
        type:actionType.INCREMENT
    }
}
 
export const decrement =()=> {
    return {
        type: actionType.DECREMENT
    }
}
 
export const add= (value)=>{
    return {
        type:actionType.ADDING,
        value:value
    }
}
 
export const substract= (value)=>{
    return {
        type: actionType.SUBSTRACT,
        value:value
    }
}
