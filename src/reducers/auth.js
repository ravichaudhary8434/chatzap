import apiConstants from "../lib/apiCostants";

const initialState = {
  loader: false,
  error: "",
  isLoggedIn: false,
  user: "",
  authToken: "",
};

const authToken = localStorage.getItem("authToken");

if (authToken && authToken !== undefined) {
  initialState.authToken = authToken;
}

const authReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case apiConstants.LOGIN_USER:
      newState = {
        ...state,
        loader: true,
        error: "",
      };
      return newState;

    case apiConstants.LOGIN_USER_SUCCESS:
      newState = {
        ...state,
        loader: false,
        authToken: action.response && action.response.token,
        isLoggedIn: true,
      };
      localStorage.setItem("authToken", action.response.token);

      return newState;

    case apiConstants.LOGIN_USER_FAIL:
      newState = {
        ...state,
        loader: false,
        error: action.response,
        isLoggedIn: false,
        authToken: "",
      };
      return newState;

    default:
      return state;
  }
};

export default authReducer;
