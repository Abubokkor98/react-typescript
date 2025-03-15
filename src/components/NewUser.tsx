import React, { useState } from "react";

export default function NewUser() {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleClick = () => {
    console.log(userName);
  };

  return (
    <div>
      <h2>Create NewUser</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={handleUserNameChange}
      />
      <p>{userName}</p>
      <button onClick={handleClick}>Show Name in console</button>
    </div>
  );
}
