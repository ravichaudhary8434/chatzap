import { Routes, Route } from "react-router-dom";
import { Inbox } from "../pages";

const Router = () => (
  <Routes>
    <Route path="/inbox/*" element={<Inbox />} />
  </Routes>
);
export default Router;
