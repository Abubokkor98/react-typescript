import { useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
}

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState<null | User>(null);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  const handleAddUser = () => {
    setUser({ id: 1, name: "Abu Bokkor" });
    console.log(user);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-5xl">useState Hook props</h1>
      <hr />
      {/* <h2 className="font-bold text-3xl ">Count: {count}</h2>
      <button className="bg-green-400 rounded-md p-2" onClick={handleIncrement}>
        Increment
      </button> */}
      <button className="bg-green-400 rounded-md p-2" onClick={handleAddUser}>
        Add User
      </button>
      <p>{user?.name}</p>
    </div>
  );
}

export default App;
