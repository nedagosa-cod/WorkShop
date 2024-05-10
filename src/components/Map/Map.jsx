import imgMapa from "/salaMap.png";
const Map = ({ getState }) => {
  const handleClick = (name) => {
    getState(name);
  };
  return (
    <section
      className="map"
      style={{
        backgroundImage: `url(${imgMapa})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="state1 state" onClick={() => handleClick("state1")}></div>
      <div className="state2 state" onClick={() => handleClick("state2")}></div>
      <div className="state3 state" onClick={() => handleClick("state3")}></div>
      <div className="state4 state" onClick={() => handleClick("state4")}></div>
      <div className="state5 state" onClick={() => handleClick("state5")}></div>
      <div className="state6 state" onClick={() => handleClick("state6")}></div>
      <div className="state7 state" onClick={() => handleClick("state7")}></div>
      <div className="state8 state" onClick={() => handleClick("state8")}></div>
    </section>
  );
};

export default Map;
