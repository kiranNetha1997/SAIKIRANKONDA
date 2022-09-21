export const increament = () => async dispatch => {
    dispatch({
        type: "INCREAMENT"
    })
};

export const decreament = () => async dispatch => {
    dispatch({
        type: "DECREAMENT"
    })
};
export const reset = () => async dispatch => {
    dispatch({
        type: "RESET"
    })
};

