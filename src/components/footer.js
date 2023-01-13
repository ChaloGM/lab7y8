import { css } from '@emotion/css'
import React, { useState} from "react";

function App() {
    const libros = useState("");
    
    const URL_API = "https://api.ipify.org/?format=json";
    fetch(URL_API)
    .then(respuestaRaw => respuestaRaw.json())
    .then((respuesta) => libros(respuesta.ip));
    return (
      <div>
        <h1>Tu ip es:</h1>
        <ul>
          {libros?.map((libro) => (
            <li> {libros} </li>
          ))}
        </ul>
      </div>
    );
  }

export function Footer() {
    return(
        <footer id="contactanos" className={css`background-color: #BAFFA5;
                                                color: gray;
                                                display: flex;
                                                flex-direction: column;
                                                width: 100%;
                                                height: 100%;`}>
                <div className={css`width: 100%;
                                display: flex;
                                justify-content: center;`} id="claro_oscuro6">
                    <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                        <h2>Us</h2><br></br><hr className={css`width: 85%;
                                                                border: 0;
                                                                border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br><br></br>
                        <p className={css`margin-right: 14%;
                                    color: rgb(132, 132, 132);`}> Somos estudiantes Certus aplicando nuestros conocimientos para el desarrollo de una pagina web </p>
                    </div>
                    <div className={css`width: 26%;
                                    margin: 3% 1%;`}>
                        <h2>Our Social</h2><br></br><hr className={css`width: 85%;
                                                                    border: 0;
                                                                    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);`}></hr><br></br><br></br>
                        <p className={css`margin-right: 14%;
                                    color: rgb(132, 132, 132);`}>We are:</p>
                        
                    </div>
                </div>

                <div className={css`width: 83%;
                                    margin: auto;
                                    
                                    text-align: center;
                                    padding: 2% 0;
                                    color: rgb(132, 132, 132);`} id="claro_oscuro7"><hr className={css`width: 100%;`}></hr>
                    <br></br><p>© 2022 Certus. All Rights Reserved | footer Design by W3layouts</p>
                </div>
                <App></App>
            </footer>
    )
}