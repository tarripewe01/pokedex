import React from "react";
import "./Topbar.css";
import pokeball from "../../images/pokeball.png";
import pokeball_color from "../../images/pokeball-color.png";

const Topbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokẽdex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball_color}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      {/* <p style={{ color: "white" }}>A -&gt; Z</p> */}
      {/* <div className="title__left">
        <button>keluar</button>
      </div> */}
    </div>
  );
};

export default Topbar;
