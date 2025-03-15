import "./App.css";
import ButtonStyle from "./components/ButtonStyle";

const myStyle = {
  color: "red",
  backgroundColor: "green",
  margin: "1rem",
};

function App() {
  return (
    <>
      <h1 className="font-bold text-center text-5xl">Style props</h1>
      <ButtonStyle btnStyle={myStyle}></ButtonStyle>
    </>
  );
}

export default App;
