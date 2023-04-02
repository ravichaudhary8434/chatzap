import { Routes, Route } from "react-router-dom";
import { Inbox, Signup, Login } from "../pages";

const Router = () => (
  <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/inbox/*" element={<Inbox />} />
  </Routes>
);
export default Router;
