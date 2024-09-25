import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

export const Users = () => {
  const { users, getAllUsers, updateAllUsers } = useContext(AppContext);

  useEffect(() => {
    getAllUsers();

    return () => {
      updateAllUsers();
    };
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
};
