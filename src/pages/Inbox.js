import { AllChats, ChatContainer } from "../components/Inbox";
import { Routes, Route } from "react-router-dom";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__container">
        <AllChats />

        <Routes>
          <Route path="hello" element={<ChatContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default Inbox;
