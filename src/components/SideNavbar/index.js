import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="sidenav">
      <Link className="sidenav__brand" to="/">
        ChatZap
      </Link>
    </div>
  );
};

export default SideNavbar;
