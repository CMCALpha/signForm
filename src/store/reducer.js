import * as actionTypes from  "./action/actionTypes";
const initialState = {
    counter: 0,
  results: []

}

const reducer =(state=initialState , action)=>{
    switch(action.type){

  case (actionTypes.INCREMENT) :
      
         const newState = Object.assign({} , state);
         newState.counter = state.counter + 1;
         return newState; 
         
        
      
  case (actionTypes.ADDING) :
      return {
          ...state,
        counter : state.counter + action.value
      }
      
  case (actionTypes.SUBSTRACT) :
    return {
        ...state,
        counter : state.counter - action.value
    }
  case (actionTypes.DECREMENT):
      return{
          ...state,
    counter : state.counter - 1
    }
  case (actionTypes.TOSTORE):
        return {
         ...state,
         results: state.results.concat({ id:new Date()  , value: state.counter })  
        }
  case (actionTypes.TODELETE):
    //  const id = 1;
    //   const updateArray = [...state.results];
    //   updateArray.splice(id , 1)
    const updateArray = state.results.filter(result => result.id !== action.resultElId);

    return {
  ...state,
  results : updateArray
}
       
    }      
     

   return state;
}
export default reducer; 