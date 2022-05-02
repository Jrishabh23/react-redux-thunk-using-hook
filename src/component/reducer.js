import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "./action";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const componentReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    console.log({ action });
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: true,
                data: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default componentReducer;
