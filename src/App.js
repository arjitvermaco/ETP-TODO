import { useContext } from "react";
import AppContext from "./context/AppContext";
import A from './A';
function App() {
  const context = useContext(AppContext);

  console.log(context);

  return (
    <>
      {context.name}

      <button
        onClick={() => {
          context.setName("ETP Batch2");
        }}
      >
        Change Name
      </button>

      <A/>
    </>
  );
}

export default App;
