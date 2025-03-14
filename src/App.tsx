import "./App.css";
import User from "./components/User";
import UserDemo from "./components/UserDemo";

const users = [
  {
    id: 1,
    name: "AB",
    email: "abcd@gmail.com",
    age: 32,
  },
  {
    id: 2,
    name: "CD",
    email: "cd@gmail.com",
    age: 30,
  },
];

function App() {
  return (
    <>
      <h1>React Typescript</h1>
      <UserDemo users={users} />
    </>
  );
}

export default App;
