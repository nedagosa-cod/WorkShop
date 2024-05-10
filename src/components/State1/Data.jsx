import { useNavigate } from "react-router-dom";
import imgClean from "/clean.png";
import { useEffect, useState } from "react";

const Data = ({ data }) => {
  const [$data, set$Data] = useState(data);
  const navigate = useNavigate();
  return (
    <section
      className="template"
      style={{
        backgroundImage: `url(${imgClean})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "768px",
        height: "100%",
      }}
    >
      <div className="back-btn" onClick={() => navigate(-1)}></div>
      <div className="canva">
        {$data == "agile" && (
          <>
            <div className="data__title">
              <h2>Agile Training</h2>
            </div>
            <div className="card">
              <div className="img"></div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1">BUSCAMOS INMEDIATEZ</p>
                </div>
                <p className="p">
                  Cada vez tenemos menos tiempo para dedicarle a nuestro
                  aprendizaje.
                </p>
                <div></div>
              </div>
            </div>
            <div className="card">
              <div className="img"></div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1">TECNOLOGÍA COBRA PROTAGONISMO</p>
                </div>
                <p className="p">
                  La coyuntura nos ha obligado a migrar aún más a formas de vida
                  basadas en la tecnología.
                </p>
                <div></div>
              </div>
            </div>
            <div className="card">
              <div className="img"></div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1">ATENTO SE ADAPTA AL CAMBIO</p>
                </div>
                <p className="p">
                  Atento viene utilizando herramientas de aprendizaje virtual y
                  tecnológico, por lo que ya existe una cultura de innovación en
                  el aprendizaje.
                </p>
                <div></div>
              </div>
            </div>
            <div className="card">
              <div className="img"></div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1">NOS BASAMOS EN AULA INVERTIDA</p>
                </div>
                <p className="p">
                  Diversas instituciones educativas vienen usando modelos
                  similares, lo cual nos permite implementar buenas prácticas
                  con una base sólida.
                </p>
                <div></div>
              </div>
            </div>
            <div className="main__action">
              <div className="main__scroll">
                <div className="main__scroll-box">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                      fill="rgba(28,28,30,1)"
                    ></path>
                  </svg>
                </div>

                <span className="main__scroll-text">Ver video</span>
              </div>
            </div>
            <video controls className="video">
              <source src="/agile.mp4" />
              vive
              {/* <iframe src="/agile.mp4" frameborder="0" loading="lazy"></iframe> */}
            </video>
          </>
        )}
      </div>
    </section>
  );
};

export default Data;
