const redux = require ("redux")
const createStore  = redux.createStore;


const initalState = {
      counter : 0 
     
}

//Reducers
const rootReducers=(state = initalState , action)=>{
           
        if (action.type === "INC_COUNTER"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
        if (action.type === "ADD_COUNTER"){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}


//Central Store
const store = createStore(rootReducers);
console.log(store.getState());

//Subscriptions
store.subscribe(()=>{
    console.log("[Subsription]" , store.getState());
})

//Action
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER" , value : 10});
console.log(store.getState());


