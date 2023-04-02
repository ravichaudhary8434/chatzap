import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function registerUser(data) {
  const resposnse = await API.post("/auth/register", data).then((res) => res);
  return resposnse;
}
