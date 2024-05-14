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
    state5: clean,
    state6: clean,
    state7: clean,
    state8: clean,
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
              <ButtonState pos="notasMex" name="Gestor de Notas" />
              <ButtonState pos="calcMex" name="Calculadoras" />
              <ButtonState pos="appsMex" name="Aplicativos Web" />
            </div>
          </div>
        </>
      )}
      {state == "state5" && (
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
                Telefonica Chile
              </span>
            </div>
            <div className="buttons lot">
              <ButtonState pos="transferChile" name="Arbol de transferencias" />
              <ButtonState pos="notasChile" name="Gestor de notas" />
              <ButtonState pos="calculadoraChile" name="Calculadora" />
              <ButtonState pos="scriptsChile" name="Scripts" />
              <ButtonState pos="faqChile" name="Preguntas frecuentes" />
            </div>
          </div>
        </>
      )}
      {state == "state6" && (
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
                Telefonica Colombia
              </span>
            </div>
            <div className="buttons lot">
              <ButtonState pos="checklistCol" name="Check List" />
              <ButtonState pos="tipologiasCol" name="Buscador de tipologias" />
              <ButtonState pos="correctorCol" name="Corrector Ortográfico" />
              <ButtonState pos="vozCol" name="Voz a Texto" />
              <ButtonState pos="appsCol" name="Aplicativos Web" />
            </div>
          </div>
        </>
      )}
      {state == "state7" && (
        <>
          <div className="canva" style={{ textAlign: "center" }}>
            <div
              className="data__title"
              style={{ textAlign: "center", marginBottom: "30px" }}
            >
              <h2>Coming Soon</h2>
              <span
                style={{
                  color: "#323284",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Proximamente
              </span>
            </div>
            <div className="buttons lot">
              <ButtonState pos="correos" name="Gestor de correos" />
              <ButtonState pos="calculadoras" name="Calculadoras" />
              <ButtonState pos="tipificador" name="Tipificador" />
              <ButtonState pos="catalogo" name="Catálogo" />
              <ButtonState pos="flujos" name="Flujogramas" />
              <ButtonState pos="macros" name="Macros" />
              <ButtonState pos="apps" name="Aplicativos Web" />
              <ButtonState pos="segmentador" name="Segmentador" />
            </div>
          </div>
        </>
      )}
      {state == "state8" && (
        <div className="canva">
          <div
            className="data__title"
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <h2>Metaverso</h2>
            <span
              style={{
                color: "#323284",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Formación inmersiva
            </span>
          </div>
          <video controls className="video">
            <source src="/meta.mp4" />
          </video>
        </div>
      )}
    </section>
  );
};

export default State;
