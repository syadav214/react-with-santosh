import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import { fetchAllUsers } from "./apiHelper";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = () => {
      fetchAllUsers().then((users) => setUserData(users));
    };
    getUserData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <br />
      <UsersList userData={userData} />
    </div>
  );
};

export default Users;
