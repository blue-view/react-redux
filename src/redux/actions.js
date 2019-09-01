import { ADD, MINUS } from "./action-types";

export const addaAction=(number)=>({type:ADD,data:number})
export const minusAction=(number)=>({type:MINUS,data:number})
//异步返回函数
export const addAsyncAction=(number)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(addaAction)
        }, 1000);
    }
}