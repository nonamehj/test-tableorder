import React from "react";
import "./NavbarStyle.css";
import { FaTable } from "react-icons/fa";
import { useGlobalContext } from "./../../context";

const Navbar = () => {
  const { table } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-center">
          <h2>cong cafe</h2>
        </div>
        <div className="nav-number-center">
          <FaTable className="icon" />
          <span className="nav-number-table">{`T-${table}`}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
