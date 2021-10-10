 export const updateObject =(oldObject , updateState)=>{
  return {
      ...oldObject,
      ...updateState
}
}