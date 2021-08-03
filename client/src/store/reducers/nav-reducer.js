/* istanbul ignore file */
import { CHANGE_NAVIGATION_STATUS } from "../actions/nav-actions";
import { NavigationStatus } from "../../constants"

const { DASHBOARD } = NavigationStatus;

const initialState = {
    navigationStatus: DASHBOARD,
}

const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CHANGE_NAVIGATION_STATUS: return { ...state, ...payload }

        default: return state;
    }

}

export default authReducer
