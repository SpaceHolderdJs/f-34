import React, { useEffect, useState } from "react";
import { API } from "../axios";
import { UserType } from "../types/users.types";

export const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    API.get("users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));


      return () => {
       return users.forEach((user) => {
            API.patch(`users/${user.id}`, user)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err))
        })
      }
  }, []);
  

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => <div key={user.id}>{user.email}</div> )}
    </div>
  );
};
