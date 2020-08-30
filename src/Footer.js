import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="Footer footer row">
      <div className="col">
        <p>
          <a
            href="https://github.com/Ramayama1/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Sourced by: <strong>Mallory Eastburn</strong>
          </a>
        </p>
        <p className="links">
          <a
            href="https://www.linkedin.com/in/mallory-eastburn-55464048"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/mallory.eastburn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/mal_theWebDev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <a
            href="https://twitter.com/MalloryEastburn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}
