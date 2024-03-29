import apiConstants from "../lib/apiCostants";

// Check is user logged in or not
export const checkIsUserLoggedIn = () => ({
  type: apiConstants.CHECK_IS_USER_LOGGED_IN,
});

// Register User
export const registerUser = (data) => ({
  type: apiConstants.REGISTER_USER,
  payload: data,
});

// Login User
export const loginUser = (data) => ({
  type: apiConstants.LOGIN_USER,
  payload: data,
});
