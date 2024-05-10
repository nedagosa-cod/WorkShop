import { Route, Routes, useNavigate } from "react-router-dom";
import Map from "./components/Map/Map";
import "./index.scss";
import State from "./components/State1/State";
import { useState } from "react";
import Data from "./components/State1/Data";

function App() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [data, setData] = useState("");
  const getState = (state) => {
    setState(state);
    navigate("/state");
  };

  const getData = (data) => {
    setData(data);
    navigate("/data");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Map getState={getState} />} />
        <Route
          path="/state"
          element={<State state={state} getData={getData} />}
        />
        <Route path="/data" element={<Data data={data} />} />
      </Routes>
    </>
  );
}

export default App;
