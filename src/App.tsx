import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <h1>React Typescript</h1>
      <User name={"Abu Bokkor Siddik"} age={27} isVerified={false} />
      <User name={"Sumaiya Akter"} age={23} isVerified={true} />

    </>
  );
}

export default App;
