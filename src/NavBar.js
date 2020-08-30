import React from "react";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="NavBar navbar navbar-dark row">
      <div className="col center-block text-center">
        <h1 className="navbar-brand">Weather App</h1>
      </div>
      <div className="col center-block text-center">
        <form className="form-inline row-xs center-block text-center">
          <input
            className="form-control mr-sm-2 searchCityID"
            type="search"
            placeholder="Change city..."
            aria-label="Search"
            autoComplete="off"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fas fa-map-marker-alt" id="currentLocBtn"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}
