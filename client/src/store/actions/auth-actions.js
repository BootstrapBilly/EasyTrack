/* istanbul ignore file */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REFRESH_SESSION = "REFRESH_SESSION";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SET_BACKEND_ERRORS = "SET_BACKEND_ERRORS";

export const loginSuccess = ({ id, jwt }) => {
    return async dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { userId: id, jwt }
        })
    }
}

export const refreshSession = ({ id, jwt }) => {
    return async dispatch => {
        dispatch({
            type: REFRESH_SESSION,
            payload: { userId: id, jwt }
        })
    }
}

export const signupSuccess = ({ id, jwt }) => {
    return async dispatch => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: { userId: id, jwt }
        })
    }
}

export const switchAuthenticationStatus = ({ status }) => {
    console.log(status)
    return async dispatch => dispatch({ type: SWITCH_AUTHENTICATION_STATUS, payload: { authenticationStatus: status } })
}

export const setBackendErrors = (errors) => {
    return async dispatch => dispatch({ type: SET_BACKEND_ERRORS, payload: { backendErrors: errors } })
}