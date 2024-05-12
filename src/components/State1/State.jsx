import { useNavigate } from "react-router-dom";
import clean from "/clean.webp";
import agiSim from "/clean.webp";
import imgState4 from "/infoWebMexTel.png";
import imgState5 from "/infoChile.png";
import imgState6 from "/infoColombia.png";
import imgState7 from "/infoComing.png";
import imgState8 from "/infoMetaverso.png";
import { useState } from "react";
import ButtonState from "./ButtonState";

const State = ({ state, getData }) => {
  const navigate = useNavigate();
  const [dataState, setDataState] = useState(state);
  const [position, setPosition] = useState();
  const getPos = (pos) => {
    getData(pos);
  };
  const statesImages = {
    state1: clean,
    state2: clean,
    state3: clean,
    state4: clean,
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
      <div className="back-btn" onClick={() => navigate("/")}></div>
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
      {state == "state2" && (
        <div className="canva" style={{ textAlign: "center" }}>
          <div
            className="data__title"
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <h2>Calidad</h2>
            <span style={{ color: "#323284", fontWeight: "bold" }}>
              Sales, excellence, Customer experience
            </span>
          </div>
          <span
            style={{
              fontWeight: "bold",
              backgroundColor: "#323284",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Nuevas estrategias para el acompañamiento de las operaciones
          </span>
          <figure style={{ width: "100%" }}>
            <img
              src="/calidad2.png"
              alt="calidad"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
        </div>
      )}
      {state == "state3" && (
        <>
          <div className="canva" style={{ textAlign: "center" }}>
            <div
              className="data__title"
              style={{ textAlign: "center", marginBottom: "30px" }}
            >
              <h2>Agile Training Simulator</h2>
            </div>
            <div className="buttons">
              <ButtonState pos="agile" name="Agile Training" />
              <ButtonState pos="simulator" name="Simulator" />
            </div>
          </div>
        </>
      )}
      {state == "state4" && (
        <>
          <div className="canva" style={{ textAlign: "center" }}>
            <div
              className="data__title"
              style={{ textAlign: "center", marginBottom: "30px" }}
            >
              <h2>InfoWeb</h2>
              <span
                style={{
                  color: "#323284",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Telefonica Mexico
              </span>
            </div>
            <div className="buttons lot">
              <ButtonState pos="checkMex" name="Check List" />
              <ButtonState pos="correctorMex" name="Corrector Ortográfico" />
              <ButtonState pos="vozMex" name="Voz a Texto" />
              <ButtonState pos="scriptsMex" name="Scripts" />
              <ButtonState pos="appsMex" name="Aplicativos Web" />
            </div>
          </div>

          <div className="checks" onClick={() => getData("checkMex")}></div>
          <div className="voz" onClick={() => getData("vozMex")}></div>
          <div
            className="corrector"
            onClick={() => getData("correctorMex")}
          ></div>
          <div className="scripts" onClick={() => getData("scriptsMex")}></div>
        </>
      )}
      {state == "state5" && (
        <>
          <div
            className="arbolCh"
            onClick={() => getData("transferChile")}
          ></div>
          <div className="notasCh" onClick={() => getData("notasChile")}></div>
          <div
            className="calcCh"
            onClick={() => getData("calculadoraChile")}
          ></div>
          <div
            className="scriptsCh"
            onClick={() => getData("scriptsChile")}
          ></div>
          <div className="faqCh" onClick={() => getData("faqChile")}></div>
        </>
      )}
      {state == "state6" && (
        <>
          <div
            className="checklistCol"
            onClick={() => getData("checklistCol")}
          ></div>
          <div
            className="tipologiasCol"
            onClick={() => getData("tipologiasCol")}
          ></div>
          <div
            className="correctorCol"
            onClick={() => getData("correctorCol")}
          ></div>
          <div className="vozCol" onClick={() => getData("vozCol")}></div>
          <div className="appsCol" onClick={() => getData("appsCol")}></div>
        </>
      )}
      {state == "state7" && (
        <>
          <div className="correos" onClick={() => getData("correos")}></div>
          <div
            className="calculadora"
            onClick={() => getData("calculadoras")}
          ></div>
          <div
            className="tipificador"
            onClick={() => getData("tipificador")}
          ></div>
          <div className="catalago" onClick={() => getData("catalogo")}></div>
          <div className="flujos" onClick={() => getData("flujos")}></div>
          <div className="macros" onClick={() => getData("macros")}></div>
          <div className="apps" onClick={() => getData("apps")}></div>
          <div
            className="segmentador"
            onClick={() => getData("segmentador")}
          ></div>
        </>
      )}
      {state == "state8" && (
        <div className="canva">
          <video controls className="video" style={{ marginTop: "40%" }}>
            <source src="/meta.mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default State;
