import { ActionTypes } from "../Types/Action-Types";
const instialState = {
    products: [
        {
            id: 1,
            first_name: "Saikiran",
            last_name: "Konda",
            category: "Developer"

        }
    ]
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_PRODUCT:
            return state;
        case ActionTypes.SELECT_PRODUCT:
            return state;
        default:
            return state;
    }
}