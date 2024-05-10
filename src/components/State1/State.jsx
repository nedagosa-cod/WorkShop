import { useNavigate } from "react-router-dom";
import imgState1 from "/clean.png";
import imgState2 from "/infoCalidad.png";
import imgState3 from "/infoAgiSim.png";
import imgState4 from "/infoWebMexTel.png";
import imgState5 from "/infoChile.png";
import imgState6 from "/infoColombia.png";
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
    state6: imgState6,
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
          <div className="simulator" onClick={() => getData("simulator")}></div>
        </>
      )}
      {state == "state8" && (
        <div className="canva">
          <video controls className="video" style={{ marginTop: "40%" }}>
            <source src="/meta.mp4" />
          </video>
        </div>
      )}
      {state == "state1" && (
        <div className="canva" style={{ textAlign: "center" }}>
          <div
            className="data__title"
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <h2>Calidad</h2>
            <span style={{ color: "#323284", fontWeight: "bold" }}>
              Mejora continua
            </span>
          </div>
          <h2 style={{ color: "#323284" }}>Que hacemos</h2>
          <p>
            En procesos y mejora continua identificamos oportunidades de
            optimización en los procesos, sistemas y operaciones, buscando
            mejorar la calidad del servicio, la eficiencia operativa y la
            satisfacción del cliente.
          </p>
          <br />
          <h2 style={{ color: "#323284" }}>Como lo hacemos</h2>
          <ul style={{ listStyle: "inside" }}>
            <li>
              Analizando datos y métricas de desempeño para identificar
              oportunidades de mejora.
            </li>
            <br />
            <li>
              Diagramando los flujos del proceso para entender su dinámica y
              oportunidades.
            </li>
            <br />
            <li>
              Diseñando e implementando estrategias y acciones para optimizar la
              eficiencia operativa.
            </li>
            <br />
            <li>Realizando mejoras en los procesos de atención al cliente.</li>
            <br />
            <li>Proponemos mejoras en los sistemas y tecnologías.</li>
            <br />
            <li>
              Capacitamos al personal en nuevas metodologías y buenas prácticas.
            </li>
            <br />
            <li>
              Realizando seguimiento y evaluando el impacto de las mejoras
              implementadas.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default State;
