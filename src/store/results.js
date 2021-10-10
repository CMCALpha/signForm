import * as actionTypes from  "./action/actionTypes";
import {updateObject} from "./utility";
const initialState = {
 
  results: []

}

const deleteResult=(state , action)=>{
           
  const updateArray = state.results.filter(result => result.id !== action.resultElId);

  return updateObject ({state ,  results : updateArray})
       

}

const reducer =(state=initialState , action)=>{
    switch(action.type){

  case (actionTypes.TOSTORE):
        return updateObject  ({ state ,   results: state.results.concat({ id:new Date()  , value: action.submit }) })      
  case (actionTypes.TODELETE):
    return deleteResult(state , action)
  
       
    }      
     

   return state;
}
export default reducer;