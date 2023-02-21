import { useState } from "react";
import EmojiSelector from "./EmojiSelector";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onSelectEmoji = (emoji) => {
    setMessage(message + emoji);
  };

  return (
    <form onSubmit={onSubmit} className="sendmessage">
      <EmojiSelector onSelectEmoji={onSelectEmoji} />
      <input
        name="sendMsg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoFocus={true}
        placeholder="Message..."
      />
      <i className="fa-regular fa-image"></i>
      <i className="fa-regular fa-heart"></i>
    </form>
  );
};

export default SendMessage;
