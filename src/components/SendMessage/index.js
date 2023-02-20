import { useState } from "react";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="sendmessage">
      <i className="fa-regular fa-face-smile"></i>
      <input
        name="sendMsg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoFocus={true}
        placeholder="Message..."
      />
      <i class="fa-regular fa-image"></i>
      <i className="fa-regular fa-heart"></i>
    </form>
  );
};

export default SendMessage;
