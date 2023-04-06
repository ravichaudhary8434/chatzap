import apiConstants from "../lib/apiCostants";

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
