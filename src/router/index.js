import { Routes, Route } from "react-router-dom";
import { Inbox } from "../pages";

const Router = () => (
  <Routes>
    <Route path="/*" element={<Inbox />} />
  </Routes>
);
export default Router;
