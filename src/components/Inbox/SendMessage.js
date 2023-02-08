import { ChatLogo } from "../../assets";

const SendMessage = () => {
  return (
    <div className="sendmsg">
      <img src={ChatLogo} alt="chat_logo" />
      <button>Send Message</button>
    </div>
  );
};

export default SendMessage;
