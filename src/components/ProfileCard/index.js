import { Link } from "react-router-dom";

const ImgUrl =
  "https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-1/316684426_3564969193731827_4972842055551921281_n.jpg?stp=c0.232.320.320a_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tX25GkmpMjwAX_5kagJ&_nc_ht=scontent.fixr3-2.fna&oh=00_AfAxF5apks_9oWCC29_unQVGe1OCDVB_VXP5vFSIU4vmuw&oe=63E5EAC3";

const ProfileCard = ({ id }) => {
  return (
    <Link to={`direct/${id}`} className="profilecard">
      <img className="profilecard__img" src={ImgUrl} alt="Profile" />
      <div className="profilecard__details">
        <div>malhotraravi842</div>
        <div>Sent a message . 6h</div>
      </div>
    </Link>
  );
};

export default ProfileCard;
