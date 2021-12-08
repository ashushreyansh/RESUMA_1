import { requestWithoutToken } from '../utils/httpRequest';
import { setAlert } from './alert';
import { LOGIN_SUCCESS, LOGOUT } from './types';

//register
export const register = (body) => async (dispatch) => {
    try {
        const response = await requestWithoutToken(
            'POST',
            'http://localhost:5000/api/user', //http://localhost:5000/api/user
            body
        );
        if (response) {
            await dispatch(setAlert('Registered Successfully', 'success'));
        }
        return response.data;
    } catch (err) {
        dispatch(setAlert(err.response.data.msg, 'danger'));
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
        dispatch(setAlert(response.data.msg, 'success'));
        return response.data;
    } catch (err) {
        dispatch(setAlert(err.response.data.msg, 'danger'));
        return err.response.data;
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
    dispatch(setAlert('Logout Successfully', 'success'));
};
