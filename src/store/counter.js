import * as actionTypes from  "../store/action/actionTypes";
import {updateObject} from "./utility";
const initialState = {
    counter: 0,
  

}

const reducer =(state=initialState , action)=>{
    switch(action.type){

  case (actionTypes.INCREMENT) :
       
  return updateObject ({state , counter : state.counter + 1 })
 
        
      
  case (actionTypes.ADDING) :
      return  updateObject ({state ,   counter : state.counter + action.value
      }) 
      
  case (actionTypes.SUBSTRACT) :
    return updateObject({state , counter : state.counter - action.value}) 
      
        
    
  case (actionTypes.DECREMENT):
      return updateObject ({state ,   counter : state.counter - 1})
       
    }  ,
        case (actionTypes.POWERFAT):
    return updateObject({state , counter1 : state.counter + action.value + state.counter * 2})
     
}
   return state;
}
export default reducer;
