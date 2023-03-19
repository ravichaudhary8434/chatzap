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

        {message.reaction && (
          <div className="chattext__reaction">{message.reaction}</div>
        )}

        {message.type === "RECEIVED" && (
          <div className="chattext__react__btns">
            <i className="fa-regular fa-face-smile"></i>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatText;
