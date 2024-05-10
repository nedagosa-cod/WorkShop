import { useNavigate } from "react-router-dom";
import imgState from "/infoCalidad.png";

const State2 = () => {
  const navigate = useNavigate();
  return (
    <section
      className="stateA"
      style={{
        backgroundImage: `url(${imgState})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "768px",
        height: "100%",
      }}
    >
      <div className="back-btn" onClick={() => navigate(-1)}></div>
    </section>
  );
};

export default State2;
