// Header.js
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Buttons from "./Button";
import { generatePDF } from "../pages/GeneratePdf";

const DownloadButton = styled.button`
  background-color: #b55d51;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9c4e3b;
  }
`;

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="logobox">
        <Logo />
      </div>
      <Menu />
      <div className="btnbox">
        <Buttons />
        <DownloadButton onClick={() => generatePDF()}>
          Télécharger le Manuel
        </DownloadButton>
      </div>
    </div>
  );
};

export default Header;