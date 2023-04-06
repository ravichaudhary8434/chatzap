import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function checkIsUserLoggedIn() {
  const authToken = localStorage.getItem("authToken");
  API.defaults.headers.common["Authorization"] = authToken;
  const resposnse = await API.get("/auth").then((res) => res);
  return resposnse;
}

export async function registerUser(data) {
  const resposnse = await API.post("/auth/register", data).then((res) => res);
  return resposnse;
}

export async function loginUser(data) {
  const resposnse = await API.post("/auth/login", data).then((res) => res);
  return resposnse;
}
