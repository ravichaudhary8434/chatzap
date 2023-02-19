const ImgUrl =
  "https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/316684426_3564969193731827_4972842055551921281_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=22zdh5xujGcAX-l3JdU&_nc_ht=scontent.fixr3-2.fna&oh=00_AfDu7xAz3HiFias_AT-J_l5TygwnGmgwur1c1c9HoWSpZQ&oe=63F4BC01";

const ChatText = ({ message }) => {
  return (
    <div className={`chattext ${message.type === "SENT" ? "right" : "left"}`}>
      <div className="chattext__wrapper">
        {message.type === "RECEIVED" && (
          <div className="chattext__profile">
            <img src={ImgUrl} alt="pp" />
          </div>
        )}
        <div className="chattext__msg">{message.text}</div>
      </div>
    </div>
  );
};

export default ChatText;
