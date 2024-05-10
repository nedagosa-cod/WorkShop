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
              <div className="img">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0476 13.5826L4.5 17.9402C3.83333 18.3251 3 17.844 3 17.0742V8.00152C3 7.23171 3.83333 6.75059 4.5 7.13549L12.0476 11.4931V8.00151C12.0476 7.23171 12.881 6.75058 13.5476 7.13548L21.4048 11.6718C22.0714 12.0567 22.0714 13.019 21.4048 13.4039L13.5476 17.9402C12.881 18.3251 12.0476 17.844 12.0476 17.0742V13.5826Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
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
              <div className="img">
                <svg
                  fill="#000000"
                  viewBox="0 0 14 14"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="m 11.8,10.6 0,-7.2035638 C 11.8,2.7367083 11.264337,2.2 10.603564,2.2 l -7.2071278,0 C 2.7367083,2.2 2.2,2.7356627 2.2,3.3964362 L 2.2,10.6 1,10.6 1,11.2 c 0,0.333681 0.2664272,0.6 0.5950819,0.6 l 10.8098361,0 C 12.726816,11.8 13,11.531371 13,11.2 l 0,-0.6 -1.2,0 z m -8.4,-7.2 7.2,0 0,5.4 -7.2,0 0,-5.4 z m 2.4,6.6 2.4,0 0,0.6 -2.4,0 0,-0.6 z"></path>
                  </g>
                </svg>
              </div>
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
              <div className="img">
                <svg
                  fill="#000000"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M13,0,10,3h2.3v9h1.4V3H16ZM5,5.7h6V4.3H5Zm0,3h6V7.3H5Zm0,3h6V10.3H5ZM3.7,4H2.3v9H0l3,3,3-3H3.7Z"></path>{" "}
                  </g>
                </svg>
              </div>
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
              <div className="img">
                <svg
                  fill="#000000"
                  viewBox="-4 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>invert</title>{" "}
                    <path d="M0 6.656h24v18.688h-24v-18.688zM12 23.75v-2.219l5.531-5.531-5.531-5.531v-2.219h-10.406v15.5h10.406zM12 21.531l-5.531-5.531 5.531-5.531v11.063z"></path>{" "}
                  </g>
                </svg>
              </div>
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
            <video controls className="video">
              <source src="/agile.mp4" />
              vive
              {/* <iframe src="/agile.mp4" frameborder="0" loading="lazy"></iframe> */}
            </video>
            {/* <div className="main__action">
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

                <span className="main__scroll-text">---------</span>
              </div>
            </div> */}
          </>
        )}
      </div>
    </section>
  );
};

export default Data;
