import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";

function SideBar() {
  let [toggle, setToggle] = useState(false);
  let [toggle1, setToggle1] = useState(false);
  let handleCollapse = () => {
    setToggle((toggle) => !toggle);
    var myCollapse = document.getElementById("collapseComponents");
    var bsCollapse = new Collapse(myCollapse);
    toggle ? bsCollapse.show() : bsCollapse.hide();
  };
  let handleCollapse1 = () => {
    setToggle1((toggle1) => !toggle1);
    var myCollapse = document.getElementById("collapseComponents1");
    var bsCollapse = new Collapse(myCollapse);
    toggle1 ? bsCollapse.show() : bsCollapse.hide();
  };
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link to='/dashboard' className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </Link>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="true"
                  aria-controls="collapseLayouts"
                  onClick={() => handleCollapse()}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Books
                  {toggle ? (
                    <div className="sb-sidenav-collapse-arrow">
                       <i className="fas fa-angle-left"></i>
                    </div>
                  ) : (
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>                    
                    </div>
                  )}
                </a>
                <div
                  className="collapse"
                  id="collapseComponents"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link
                      to="/addbooks"
                      className="nav-link"
                      
                    >
                      Add Books
                    </Link>
                    <Link to='/listbooks' className="nav-link">
                      List Books
                    </Link>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="true"
                  aria-controls="collapseLayouts"
                  onClick={() => handleCollapse1()}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  Users
                  {toggle1 ? (
                    <div className="sb-sidenav-collapse-arrow">
                       <i className="fas fa-angle-left"></i>
                    </div>
                  ) : (
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>                    
                    </div>
                  )}
                </a>
                <div
                  className="collapse"
                  id="collapseComponents1"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link to='/addusers' className="nav-link" href="layout-static.html">
                      Add Users
                    </Link>
                    <Link to='/viewusers'  className="nav-link" href="layout-sidenav-light.html">
                      Users Details
                    </Link>
                  </nav>
                </div>

                <div className="sb-sidenav-menu-heading">Addons</div>
                <Link to='/assignbooks' className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Assign Books
                </Link>
                <Link to='/userlogs' className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table"></i>
                  </div>
                  Users Logs
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Library Management System
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SideBar;
