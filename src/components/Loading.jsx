import React from "react";
import "./css/Loading.css";
import Construct from "../images/icons/construct-outline.svg";

function Loading() {
  return (
    <section className="section-loading">
      <img
        src={Construct}
        alt="Um ícone de duas ferramentas de forma cruzada."
        className="icon-size"
      />
      <h1>Página em desenvolvimento...</h1>
    </section>
  );
}

export default Loading;
