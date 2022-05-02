import axios from "axios";
import { useDispatch } from "react-redux";

export const FETCH_USERS_REQUEST = "get_user_request";
export const FETCH_USERS_SUCCESS = "users_success";
export const FETCH_USERS_FAILURE = "users_failure";

export const fetchUser = () => {
    // const dispatch = useDispatch();
    console.log("function call");
    return (dispatch) => {
        console.log("function call", typeof dispatch);
        dispatch(fetchUserRequest);
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // response.data is the users
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUserFailure(error.message));
            });
    };
};

export const fetchUserRequest = () => {
    console.log("dddddddddddd");
    return {
        type: FETCH_USERS_REQUEST,
    };
};

export const fetchUserSuccess = (users) => {
    console.log({ users });
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

export const fetchUserFailure = (error) => {
    console.log({ error });
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};
