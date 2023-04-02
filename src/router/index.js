import { Routes, Route } from "react-router-dom";
import { Inbox, Signup } from "../pages";

const Router = () => (
  <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/inbox/*" element={<Inbox />} />
  </Routes>
);
export default Router;
