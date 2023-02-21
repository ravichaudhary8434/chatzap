import ProfileCard from "../ProfileCard";

const AllChats = () => {
  const ARRAY = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1];
  return (
    <div className="allchats">
      <div className="allchats__header">malhotraravi842</div>
      <div className="allchats__container">
        <div className="allchats__subheader">Messages</div>
        {ARRAY.map((data, i) => (
          <ProfileCard id={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllChats;
