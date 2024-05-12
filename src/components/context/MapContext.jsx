import { createContext, useRef, useState } from "react";

const MapContext = createContext();

const MapProvider = () => {
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
