const defaultValue = {
    falseValue: ["false"]
}


export const addFalseReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "ADD_FALSE_ITEM": return { ...state, falseValue: [state.falseValue, action.payload] };
        default: return state;
    }
}