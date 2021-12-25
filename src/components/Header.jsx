import React from "react";
import "./css/Header.css";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">Elithon Silva</h1>
      </a>
      <nav className="header-menu">
        <a href="projetos">Projetos</a>
        <a href="contato">Contato</a>
        <a href="sobre">Sobre</a>
      </nav>
    </header>
  );
}

export default Header;
