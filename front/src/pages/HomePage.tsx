import React from "react";
import Header from "../component/Header";
import Avatar from "../component/Avatar";
import "../assets/homepage.css";
import Jauge from "../component/Jauge";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="avatar_config_homepage">
        <Avatar />
        <Jauge />
      </div>
    </div>
  );
}

export default HomePage;
