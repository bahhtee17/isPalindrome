import { createStore, combineReducers } from "redux";
import { addTrueReducer } from "./addTrueReducer"
import { addFalseReducer } from "./addFalseReducer"


const rootReducer = combineReducers({
    trueValue: addTrueReducer,
    falseValue: addFalseReducer,
})

export const store = createStore(rootReducer)