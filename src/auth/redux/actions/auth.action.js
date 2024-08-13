import setAuthToken from "../../../utils/setAuthToken";
import {
  registerService,
  loginService,
  getUserDetails,
} from "../../services/auth.service";
import { REGISTER_SUCCESS, LOGIN_SUCCESS, USER_LOADED } from "../types";

export const registerAction = (formData, navigate) => async (dispatch) => {
  try {
    const res = await registerService(formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUserAction());
    navigate("/dashboard");
  } catch (err) {}
};

export const loginAction = (formData, navigate) => async (dispatch) => {
  try {
    const res = await loginService(formData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/dashboard");
  } catch (err) {}
};

//work with post '/auth' get by providing token
export const loadUserAction = () => async (dispatch) => {
  try {
    setAuthToken(localStorage.getItem("token"));
    const res = await getUserDetails();
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {}
};
