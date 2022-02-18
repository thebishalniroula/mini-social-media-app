import "./users.css";
import useFetch from "./useFetch";
import User from "./User";

const DisplayUsers = ({ url, title, input }) => {
  const [users, loading] = useFetch(url);

  const filterUsers = (input) => {
    if (input) {
      const filteredUsers = users.filter((user) => user.login.includes(input));
      return filteredUsers;
    }
  };
  const filteredUsers = filterUsers(input);
  return (
    <div className="users">
      <h3 className="DisplayUsers_title">{title}</h3>
      {loading && <span className="loading">Loading...</span>}
      {filteredUsers
        ? filteredUsers.map((user) => <User key={user.id} {...user} />)
        : users.map((user) => <User key={user.id} {...user} />)}
      \
    </div>
  );
};

export default DisplayUsers;
