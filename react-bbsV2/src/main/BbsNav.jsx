import React from "react";
import "../css/BbsNav.css";
import { Link } from "react-router-dom";

const BbsNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            자유게시판
          </Link>
        </li>
        <li>
          <Link to="/notice" className="nav-link">
            공지사항
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BbsNav;
