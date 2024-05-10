import { Route, Routes, useNavigate } from "react-router-dom";
import Map from "./components/Map/Map";
import "./index.scss";
import State from "./components/State1/State";
import State2 from "./components/State1/State2";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const getState = (state) => {
    setState(state);
    navigate("/state");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Map getState={getState} />} />
        <Route path="/state" element={<State state={state} />} />
      </Routes>
    </>
  );
}

export default App;
