import React from "react";
import { BsGrid3X3GapFill, BsFillGearFill, BsBellFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { MdHelp } from "react-icons/md";

import "./header.css";
import logo from "../../assets/logo.png";

export type HeaderProps = {
  selectedOption:
    | "your-work"
    | "projects"
    | "filters"
    | "control-panel"
    | "people"
    | "apps";
};

export const Header: React.FC<HeaderProps> = ({
  selectedOption,
}: HeaderProps) => {
  return (
    <header>
      <div className="menu">
        <BsGrid3X3GapFill size={20} color="#fff" />
      </div>
      <img src={logo} className="logo" />
      <div className="menu-options">
        <div
          className={`menu-option menu-your-work ${
            selectedOption === "your-work" ? "selected" : ""
          }`}
        >
          Seu trabalho
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div
          className={`menu-option menu-projects ${
            selectedOption === "projects" ? "selected" : ""
          }`}
        >
          Projetos
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div
          className={`menu-option menu-filters ${
            selectedOption === "filters" ? "selected" : ""
          }`}
        >
          Filtros
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div
          className={`menu-option menu-control-panel ${
            selectedOption === "control-panel" ? "selected" : ""
          }`}
        >
          Painéis de Controle
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div
          className={`menu-option menu-people ${
            selectedOption === "people" ? "selected" : ""
          }`}
        >
          Pessoas
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div
          className={`menu-option menu-apps ${
            selectedOption === "apps" ? "selected" : ""
          }`}
        >
          Aplicativos
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
        <div className="menu-option menu-plus">
          Mais
          <FiChevronDown size={15} color="#999" className="arrow-down" />
        </div>
      </div>
      <div className="right-items">
        <div className="menu right-menu">
          <BsBellFill size={20} color="#fff" />
        </div>
        <div className="menu right-menu">
          <MdHelp size={23} color="#fff" />
        </div>
        <div className="menu right-menu">
          <BsFillGearFill size={20} color="#fff" />
        </div>
        <div className="menu">
          <img
            src="https://github.com/maiconfriedel.png"
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};
