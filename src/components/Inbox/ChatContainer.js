import SendMessage from "../SendMessage";
import ChatUI from "../ChatUI";
import constants from "../../constants";

const ChatContainer = () => {
  return (
    <div className="chatcontainer">
      <div className="chatcontainer__header">
        <div className="chatcontainer__profile">
          <img src={constants.profilePicUrl} alt="profile-pic" /> Ravi Chaudhary
        </div>
        {
          //<div className="chatcontainer__links">A B C</div>
        }
      </div>
      <div className="chatcontainer__messages">
        <ChatUI />
      </div>
      <div className="chatcontainer__sendmsg">
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
