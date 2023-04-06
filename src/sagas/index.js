import { call, put, takeEvery } from "redux-saga/effects";
import { loginUser, registerUser } from "../lib/api";
import apiConstants from "../lib/apiCostants";

function* _registerUser(action) {
  try {
    const response = yield call(registerUser, action.payload);
    yield put({
      type: apiConstants.REGISTER_USER_SUCCESS,
      response: response.data,
    });
  } catch (e) {
    yield put({
      type: apiConstants.REGISTER_USER_FAIL,
      response: e.response,
    });
  }
}

function* _loginUser(action) {
  try {
    const response = yield call(loginUser, action.payload);
    yield put({
      type: apiConstants.LOGIN_USER_SUCCESS,
      response: response.data,
    });
  } catch (e) {
    yield put({
      type: apiConstants.LOGIN_USER_FAIL,
      response: e.response,
    });
  }
}

export function* Saga() {
  yield takeEvery(apiConstants.REGISTER_USER, _registerUser);
  yield takeEvery(apiConstants.LOGIN_USER, _loginUser);
}
