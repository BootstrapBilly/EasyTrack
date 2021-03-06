/* istanbul ignore file */
import { LOGIN_SUCCESS, LOGOUT, REFRESH_SESSION, SET_BACKEND_ERRORS, SIGNUP_SUCCESS, SWITCH_AUTHENTICATION_STATUS } from "../actions"
import { AuthenticationStatus } from "../../constants"

const { LANDING, OFFER2FA, AUTHENTICATED } = AuthenticationStatus;

const initialState = {
    user: null,
    jwt: null,
    authenticationStatus: LANDING,
    backendErrors: [],
}

const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOGIN_SUCCESS: return { ...state, ...payload, authenticationStatus: AUTHENTICATED }
        case LOGOUT: return { ...state, user:null, jwt: null, backendErrors: null, authenticationStatus: LANDING }
        case REFRESH_SESSION: return { ...state, ...payload }
        case SIGNUP_SUCCESS: return { ...state, ...payload, authenticationStatus: OFFER2FA }
        case SWITCH_AUTHENTICATION_STATUS: return { ...state, ...payload }
        case SET_BACKEND_ERRORS: return { ...state, ...payload }

        default: return state;
    }

}

export default authReducer
