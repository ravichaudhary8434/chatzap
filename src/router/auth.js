import { Routes, Route } from "react-router-dom";
import { Inbox } from "../pages";

const AuthRouter = () => (
  <Routes>
    <Route path="/inbox/*" element={<Inbox />} />
  </Routes>
);
export default AuthRouter;
