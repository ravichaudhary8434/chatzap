import ChatText from "./ChatText";
import constants from "../../constants";

const ChatUI = () => {
  return (
    <div className="chatui">
      {constants.MESSAGES.map((message, i) => {
        return <ChatText key={i} message={message} />;
      })}
    </div>
  );
};

export default ChatUI;
