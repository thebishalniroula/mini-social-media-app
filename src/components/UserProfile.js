import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./userProfile.css";
import DisplayUsers from "./DisplayUsers";
import DisplayFollowing from "./DisplayFollowing";

const UserProfile = () => {
  const [displayFollowers, setDisplayFollowers] = useState(false);
  const [displayFollowing, setDisplayFollowing] = useState(false);
  const { id } = useParams();
  const [userDetails, loading] = useFetch(`https://api.github.com/users/${id}`);

  if (loading) {
    return <span className="loading">loading...</span>;
  } else
    return (
      <div className="userDetails">
        <div className="blank"></div>
        <img
          src={userDetails.avatar_url}
          alt={userDetails.name}
          className="userProfilePic"
        />
        <h2>{userDetails.name}</h2>
        <span className="login">@{userDetails.login}</span>
        <div className="follow-section">
          <div
            className="followers"
            onClick={() => {
              if (displayFollowing) {
                setDisplayFollowing(false);
              }
              setDisplayFollowers(!displayFollowers);
            }}
            style={
              displayFollowers
                ? {
                    background: "rgb(180, 180, 180)",
                    borderBottom: "5px solid rgb(47, 47, 255)",
                  }
                : {}
            }
          >
            <div className="follow">Followers</div>
            <div className="count">{userDetails.followers}</div>
          </div>
          <div
            className="following"
            onClick={() => {
              if (displayFollowers) {
                setDisplayFollowers(false);
              }
              setDisplayFollowing(!displayFollowing);
            }}
            style={
              displayFollowing
                ? {
                    background: "rgb(180, 180, 180)",
                    borderBottom: "5px solid rgb(47, 47, 255)",
                  }
                : {}
            }
          >
            <div className="follow">Following</div>
            <div className="count">{userDetails.following}</div>
          </div>
        </div>
        <div className="pageContent">
          {displayFollowers && (
            <DisplayUsers
              url={userDetails.followers_url}
              title={"Who follows " + userDetails?.name?.split(" ")[0] + " ?"}
            />
          )}
          {displayFollowing && <DisplayFollowing />}
        </div>
      </div>
    );
};

export default UserProfile;
