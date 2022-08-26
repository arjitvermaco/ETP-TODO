import React from "react";
import AppContext from "./AppContext";

export default function AppState(props) {
  const [store, setStore] = React.useState({
    name: "Arjit",
    address: "Lucknow",
  });

  const logSomething = ()=>{
    console.log("Loogin here");
  }

  return <AppContext.Provider value={{store,logSomething}}>
     {props.children}
  </AppContext.Provider>;
}
