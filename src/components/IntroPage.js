import React from "react";
import logo from "./intrologo.png";

const IntroPage = () => {
  return (
    <div className="intro-container" style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontSize: "120px", marginLeft: "-50px", color: "#243160" }}>
        SCRIBBLESPACE
      </h1>
      <div className="intro-caption-container" style={{ display: "flex", alignItems: "center", marginLeft: "-50px" }}>
        <div className="intro-text-container" style={{ marginRight: "20px" }}>
          <p style={{ fontSize: "20px", color: "#304180" }}>
            Welcome to SCRIBBLESPACE: Your Ultimate Note-Taking Companion! Enjoy
            seamless user authentication, top-notch security for your personal
            notes, and an awesome platform designed to keep your thoughts
            organized and accessible anytime, anywhere. Capture ideas, craft
            stories, and never miss a moment of inspiration with SCRIBBLESPACE.
          </p>
        </div>
        <div className="intro-image-container">
          <img src={logo} alt="SCRIBBLESPACE" style={{ width: "600px", height: "auto",  marginRight: "-50px" }} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
