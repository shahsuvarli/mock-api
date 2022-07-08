import { useEffect } from "react";
import { actorsData } from "./actorsAPI";
import "./App.css";

function App() {
  useEffect(() => getActors(), []);

  const getActors = () =>
    actorsData.then((res) => {
      console.log(res);
    });

  return <div className="App"></div>;
}

export default App;
