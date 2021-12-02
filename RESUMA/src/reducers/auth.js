import { AUTH_USER, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    authenticated: localStorage.getItem('token') ? true : false, // or just !!localStorage.getItem('token')
    loading: false,
    user: null
 }

const auth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_USER:
            return {
                ...state,
                loading: false,
                authenticated: true,
                user: payload,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("auth-token", payload.token);
            return {
                ...state,
                loading: false,
                authenticated: true,
                token: payload.token,
                user: payload.user,
            };
        case LOGOUT:
            localStorage.removeItem("auth-token");
            return {
                ...state,
                loading: false,
                authenticated: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};

export default auth;

