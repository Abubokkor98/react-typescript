import "./App.css";
import User from "./components/User";

const user1 = {
  name: "Abu Bokkor Siddik",
  age: 27,
  isVerified: false,
  lang: ["english", " bangla"],
};
const user2 = {
  name: "Sumaiya Akter",
  age: 23,
  isVerified: true,
  lang: ["english", " bangla"],
};

function App() {
  return (
    <>
      <h1>React Typescript</h1>
      {/* <User
        name={"Abu Bokkor Siddik"}
        age={27}
        isVerified={false}
        lang={["english", " bangla"]}
      /> */}
      <User user={user1} />
      <User user={user2} />
    </>
  );
}

export default App;
