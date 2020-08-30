import React from "react";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="NavBar navbar navbar-dark">
      <h1 className="navbar-brand">Weather App</h1>
      <form className="form-inline">
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
    </nav>
  );
}
