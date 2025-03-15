import "./App.css";
import Button from "./components/Button";
import DataFetch from "./components/DataFetch";
import Post from "./components/Post";



function App() {
  return (
    <>
      <h1 className="font-bold text-center text-5xl">React Typescript</h1>
      {/* <DataFetch status={'success'}/> */}
      {/* <Button>Click me</Button> */}
      <Post></Post>
      
    </>
  );
}

export default App;
