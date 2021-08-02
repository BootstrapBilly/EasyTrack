/* istanbul ignore file */
import { LOGIN_SUCCESS, REFRESH_SESSION, SET_BACKEND_ERRORS, SIGNUP_SUCCESS, SWITCH_AUTHENTICATION_STATUS } from "../actions"
import { AuthenticationStatus } from "../../constants"

const { LANDING, OFFER2FA, AUTHENTICATED, LOGIN } = AuthenticationStatus;

const initialState = {
    userId: null,
    jwt: null,
    authenticationStatus: LANDING,
    backendErrors: [],
}

const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOGIN_SUCCESS: return { ...state, ...payload, authenticationStatus: AUTHENTICATED }
        case REFRESH_SESSION: return { ...state, ...payload }
        case SIGNUP_SUCCESS: return { ...state, ...payload, authenticationStatus: OFFER2FA }
        case SWITCH_AUTHENTICATION_STATUS: return { ...state, ...payload }
        case SET_BACKEND_ERRORS: return { ...state, ...payload }

        default: return state;
    }

}

export default authReducer
