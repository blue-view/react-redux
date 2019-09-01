import { createStore } from "redux";
import {counter} from './reduxs'

const store=createStore(counter);
export default store