import { Routes, Route } from "react-router-dom";
import { Inbox } from "../pages";

const AuthRouter = () => (
  <Routes>
    <Route path="/*" element={<Inbox />} />
  </Routes>
);
export default AuthRouter;
