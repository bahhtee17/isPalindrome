const defaultValue = {
    trueValue: ["true"],
    id: Math.random()
}


export const addTrueReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "ADD_TRUE_ITEM": return { ...state, trueValue: [...state.trueValue, action.payload] };
        default: return state;
    }
}