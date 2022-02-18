import DisplayUsers from "./DisplayUsers";

const Users = ({ input }) => {
  return (
    <DisplayUsers
      url="https://api.github.com/users"
      title="GitHub Users"
      input={input}
    />
  );
};

export default Users;
