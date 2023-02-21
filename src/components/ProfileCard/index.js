import { Link } from "react-router-dom";
import constants from "../../constants";

const ProfileCard = ({ id }) => {
  return (
    <Link to={`direct/${id}`} className="profilecard">
      <img
        className="profilecard__img"
        src={constants.profilePicUrl}
        alt="Profile"
      />
      <div className="profilecard__details">
        <div>malhotraravi842</div>
        <div>Sent a message . 6h</div>
      </div>
    </Link>
  );
};

export default ProfileCard;
