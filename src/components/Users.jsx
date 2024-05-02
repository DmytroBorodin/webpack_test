import React, { useState } from "react";

const dummyUsers = [
  {
    name: "Dmytro",
    lastName: "Borodin",
    id: 1,
    age: 28,
  },
  {
    name: "Nadiia",
    lastName: "Borodin",
    id: 2,
    age: 28,
  },
  {
    name: "Paul",
    lastName: "Varga",
    id: 3,
    age: 31,
  },
];

const Users = () => {
  const [userData, setUserData] = useState(null);

  const users = dummyUsers.map((user) => (
    <button onClick={() => setUserData(user)} key={user.id}>
      {user.name + " " + user.lastName}
    </button>
  ));

  return (
    <div>
      {users}
      {userData && (
        <ul>
          <li>Full name: {userData.name + " " + userData.lastName}</li>
          <li>Age: {userData.age}</li>
        </ul>
      )}
    </div>
  );
};

export default Users;
