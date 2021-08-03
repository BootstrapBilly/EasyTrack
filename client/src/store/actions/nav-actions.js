/* istanbul ignore file */
export const CHANGE_NAVIGATION_STATUS = "CHANGE_NAVIGATION_STATUS";
export const REFRESH_SESSION = "REFRESH_SESSION";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SET_BACKEND_ERRORS = "SET_BACKEND_ERRORS";

export const changeNavigationStatus = ({ location }) => {
    return async dispatch => {
        dispatch({
            type: CHANGE_NAVIGATION_STATUS,
            payload: { navigationStatus: location }
        })
    }
}
