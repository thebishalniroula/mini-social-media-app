import "./user.css";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="userWrapper">
      <Link className="user" to={"/" + props.login}>
        <img src={props.avatar_url} className="userImage" alt={props.login} />
        <h6 className="userName">{props.login}</h6>
        <span className="profile">Profile</span>
      </Link>
    </div>
  );
};

export default User;
