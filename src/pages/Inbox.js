import { AllChats, ChatContainer, SendMessage } from "../components/Inbox";
import { Routes, Route } from "react-router-dom";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__container">
        <div className="inbox__container__allchats">
          <AllChats />
        </div>
        <div className="inbox__container__singlechat">
          <Routes>
            <Route path="direct/:id" element={<ChatContainer />} />
            <Route path="/" element={<SendMessage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
