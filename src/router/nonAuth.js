import { Routes, Route } from "react-router-dom";
import { Signup, Login } from "../pages";

const NonAuthRouter = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="*" element={<Login />} />
  </Routes>
);
export default NonAuthRouter;
