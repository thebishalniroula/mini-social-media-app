import "./users.css";
import useFetch from "./useFetch";
import User from "./User";
const DisplayUsers = ({ url, title }) => {
  const [users, loading] = useFetch(url);
  return (
    <div className="users">
      <h3 className="DisplayUsers_title">{title}</h3>
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        users.map((user) => <User key={user.id} {...user} />)
      )}
    </div>
  );
};

export default DisplayUsers;
