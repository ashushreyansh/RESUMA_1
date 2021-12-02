import { requestWithoutToken } from "../utils/httpRequest";
import { LOGIN_SUCCESS, LOGOUT } from "./types";

//register
export const register =
    (body) => async (dispatch) => {
        try {

            const response = await requestWithoutToken(
                'POST',
                'http://localhost:5000/api/user',//http://localhost:5000/api/user
                body
            );
            return response.data;
        } catch (err) {
            return err.response.data;
        }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const body = { email, password };

        const response = await requestWithoutToken(
            'POST',
            'http://localhost:5000/api/auth',
            body
        );
        console.log(response);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.data,
        });
        return response.data;
    } catch (err) {
        //dispatch(error(err));
        return err.response.data;
    }
};

export const logout = () => (dispatch) => {

    dispatch({
        type: LOGOUT,
    });
};