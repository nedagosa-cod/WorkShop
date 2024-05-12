import { Route, Routes, useNavigate } from "react-router-dom";
import Map from "./components/Map/Map";
import "./index.scss";
import State from "./components/State1/State";
import { useState } from "react";
import Data from "./components/State1/Data";
import { MapProvider } from "./components/context/MapContext";

function App() {
  const navigate = useNavigate();

  const [state, setState] = useState(localStorage.getItem("ws-state") || "");
  const getState = (state) => {
    setState(state);
    localStorage.setItem("ws-state", state);
    navigate("/state");
  };

  return (
    <>
      <MapProvider>
        <Routes>
          <Route path="/" element={<Map getState={getState} />} />
          <Route path="/state" element={<State state={state} />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </MapProvider>
    </>
  );
}

export default App;
