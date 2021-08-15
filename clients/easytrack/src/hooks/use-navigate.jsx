import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeNavigationStatus } from "../store/actions";

const useNavigate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const navigateTo = async ({ location }) => {
        history.push(`/${location}`);
        dispatch(changeNavigationStatus({ location }))
    }

    return { navigateTo };
}

export default useNavigate;
