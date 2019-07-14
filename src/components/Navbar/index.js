import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="text-center navbar navbar-dark bg-dark">
        <span className="navbar-brand">Sailor Moon</span>
        <span className="navbar-text">Score: {props.score} Highscore: {props.topscore}</span>
      </nav>
      <header className="text-center mx-auto d-block">
        <div className="headerText mx-auto d-block">
          <h1>Clicky Game - Sailor Moon</h1>
          <h3><b>Instructions:</b> Click on an image but only once to gain a point. Like a memorie game, the goal is to make the longest chain and therefore getting the highest score. Beware: if you click on an image more than once you'll lose and will have to start again. Good luck!</h3>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
