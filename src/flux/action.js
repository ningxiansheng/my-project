import listDispatcher from "./dispatch"

const action = {
   addList(obj){
       listDispatcher.dispatch({
           actionType:"Add",
           data:obj
       })
   },
   del(i){
    listDispatcher.dispatch({
        actionType:"Del",
        data:i
    })
   } 
}
export default action