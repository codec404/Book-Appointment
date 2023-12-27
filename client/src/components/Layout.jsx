import React from "react";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <div className="logo-content">
                <img src="./assets/images/doc-logo.svg" alt="" />
                <h6>DOC APP</h6>
              </div>
              <hr className="hor-row" />
            </div>
            <div className="menu">Menu</div>
          </div>
          <div className="content">
            <div className="header">Header</div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
