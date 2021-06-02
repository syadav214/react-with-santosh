import React from "react";

const UsersList = ({ userData }) => {
  return (
    <>
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
    </>
  );
};

export default UsersList;
