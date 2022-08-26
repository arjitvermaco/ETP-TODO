import logo from "./logo.svg";
import "./App.css";
import A from "./A";
import B from "./B";
import C from "./C";
import { useContext } from "react";
import AppContext from './context/AppContext'
function App() {

  const state = useContext(AppContext);
  console.log("State",state);

  return (
    <>
      <A>
      
      </A>
      <B/>
        <C/>
    </>
  );
}

export default App;
