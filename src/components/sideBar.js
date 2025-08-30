import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

const SideBar = () => {
  const { user } = useAuth();
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <NavLink className="nav-link" to="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </NavLink>
            <div className="sb-sidenav-menu-heading">Interface</div>

            <NavLink
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Management
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </NavLink>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <NavLink className="nav-link" to="/customers">
                  Customers
                </NavLink>
              </nav>
            </div>

            <NavLink
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFinance"
              aria-expanded="false"
              aria-controls="collapseFinance"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Finance
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </NavLink>
            <div
              className="collapse"
              id="collapseFinance"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <NavLink className="nav-link" to="/revenues">
                  Revenues
                </NavLink>
              </nav>
               <nav className="sb-sidenav-menu-nested nav">
                <NavLink className="nav-link" to="/expenses">
                  Expenses
                </NavLink>
              </nav>
            </div>

            <NavLink
              className="nav-link collapsed"
              to="/coming-soon"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAnalytics"
              aria-expanded="false"
              aria-controls="collapseAnalytics"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Analytics
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </NavLink>
            <div
              className="collapse"
              id="collapseAnalytics"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <NavLink className="nav-link" to="/reports">
                  Reports
                </NavLink>
              </nav>
            </div>

            <div className="sb-sidenav-menu-heading">Addons</div>
            <NavLink className="nav-link" to="/coming-soon">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/coming-soon">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Settings
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          {user?.username}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
