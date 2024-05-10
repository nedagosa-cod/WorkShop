import { useNavigate } from "react-router-dom";
import imgState1 from "/infoMejoraC.png";
import imgState2 from "/infoCalidad.png";
import imgState3 from "/infoAgiSim.png";
import imgState4 from "/infoWebMexTel.png";
import imgState5 from "/infoChile.png";
import imgState7 from "/infoComing.png";
import imgState8 from "/infoMetaverso.png";
import { useEffect, useState } from "react";

const State = ({ state, getData }) => {
  const navigate = useNavigate();
  const [dataState, setDataState] = useState(state);

  const statesImages = {
    state1: imgState1,
    state2: imgState2,
    state3: imgState3,
    state4: imgState4,
    state5: imgState5,
    state6: "/state6.png",
    state7: imgState7,
    state8: imgState8,
  };
  return (
    <section
      className="template"
      style={{
        backgroundImage: `url(${statesImages[dataState]})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "768px",
        height: "100%",
      }}
    >
      <div className="back-btn" onClick={() => navigate(-1)}></div>
      {state == "state3" && (
        <>
          <div className="agile" onClick={() => getData("agile")}></div>
          <div className="simulator"></div>
        </>
      )}
      {state == "state8" && (
        <div className="canva">
          <video controls className="video" style={{ marginTop: "40%" }}>
            <source src="/agile.mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default State;
