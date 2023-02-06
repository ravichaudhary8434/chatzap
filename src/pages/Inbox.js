import { AllChats, ChatContainer } from "../components/Inbox";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__container">
        <AllChats />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Inbox;
