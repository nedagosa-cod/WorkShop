import { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const navigate = useNavigate();
  const [dataScene, setScene] = useState("");
  const getScene = (value) => {
    setScene(value);
    navigate("/data");
  };
  const data = {
    getScene,
    dataScene,
  };
  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };
export default MapContext;
