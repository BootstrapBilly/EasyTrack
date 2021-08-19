/* istanbul ignore file */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const REFRESH_SESSION = "REFRESH_SESSION";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SET_BACKEND_ERRORS = "SET_BACKEND_ERRORS";

export const loginSuccess = ({ user, jwt }) => {
    return async dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user, jwt }
        })
    }
}
export const logout = () => {
    return async dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
        })
    }
}

export const refreshSession = ({ user, jwt }) => {
    return async dispatch => {
        dispatch({
            type: REFRESH_SESSION,
            payload: { user, jwt }
        })
    }
}

export const signupSuccess = ({ user, jwt }) => {
    return async dispatch => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: { user, jwt }
        })
    }
}

export const switchAuthenticationStatus = ({ status }) => {
    return async dispatch => dispatch({ type: SWITCH_AUTHENTICATION_STATUS, payload: { authenticationStatus: status } })
}

export const setBackendErrors = (errors) => {
    return async dispatch => dispatch({ type: SET_BACKEND_ERRORS, payload: { backendErrors: errors } })
}