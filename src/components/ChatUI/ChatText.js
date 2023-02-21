import constants from "../../constants";

const ChatText = ({ message }) => {
  return (
    <div className={`chattext ${message.type === "SENT" ? "right" : "left"}`}>
      <div className="chattext__wrapper">
        {message.type === "RECEIVED" && (
          <div className="chattext__profile">
            <img src={constants.profilePicUrl} alt="pp" />
          </div>
        )}
        <div className="chattext__msg">{message.text}</div>
      </div>
    </div>
  );
};

export default ChatText;
