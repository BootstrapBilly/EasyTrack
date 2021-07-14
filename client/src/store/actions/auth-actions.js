export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = ({ id }) => {

    return async dispatch => {

        dispatch({ //a function to be dispatched to the reducer which then changes the global state

            type: LOGIN_SUCCESS,//Type of dispatch, as declared at the to
            payload: { userId: id }
        })

    }

}
