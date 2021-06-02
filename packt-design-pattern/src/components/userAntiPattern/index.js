import React, { useState, useEffect } from "react";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUserData(json));
    };
    getUserData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <br />
      {userData &&
        userData.length > 0 &&
        userData.map((user) => {
          return (
            <div key={user.id}>
              {user.name}
              &nbsp; <b>Email</b>: {user.email}
              &nbsp; <b>Phone</b>: {user.phone}
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Users;
