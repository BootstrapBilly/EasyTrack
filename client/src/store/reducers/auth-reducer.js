import { LOGIN_SUCCESS } from "../actions"

const initialState = {
    userId: null,
}

const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOGIN_SUCCESS:

            return { ...state, ...payload }

        default:

            return state;
    }

}

export default authReducer
