import { ADD, MINUS } from "./action-types";

export const addaAction=(number)=>({type:ADD,data:number})
export const minusAction=(number)=>({type:MINUS,data:number})