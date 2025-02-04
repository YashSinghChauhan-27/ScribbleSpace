import React from "react";
import logo from "./intrologo.png";

const IntroPage = () => {
  return (
    <>
      <style>
        {`
          /* Background Animation */
          body {
            margin: 0;
            font-family: Helvetica, Arial, sans-serif;
            overflow: hidden; /* Prevent scrolling due to the background animation */
          }

          /* Watermark */
          .watermark {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${logo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 50%;
            opacity: 0.1; /* Subtle watermark */
            pointer-events: none; /* Ensure it doesn't interfere with user interaction */
          }

          /* Background Animation */
          body {
            background: linear-gradient(
              45deg,
              rgb(246, 248, 251),
              rgb(221, 236, 245),
              rgb(225, 223, 249),
              rgb(253, 245, 255),
              rgb(251, 240, 246),
              rgb(249, 241, 235),
              rgb(247, 243, 237),
              rgb(240, 242, 246)
            );
            background-size: 300% 300%;
            animation: gradientShift 10s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

         
          /* Slide-in Animation */
          @keyframes slideFromLeft {
            0% {
              transform: translateX(-40%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Intro Container */
          .intro-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            position: relative;
            z-index: 1; /* Ensure content is above watermark */
          }

          .intro-container h1 {
            font-size: clamp(3rem, 9vw, 8rem);
            margin: 20px 0;
            color: #66756a;
            font-weight: bold;
          }

          /* Individual Letter Animation */
          .intro-container h1 span {
            display: inline-block;
            opacity: 0; /* Hidden by default */
            animation: slideFromLeft 0.7s ease-out forwards;
          }

          /* Adding Delay for Each Letter */
          .intro-container h1 span:nth-child(1) { animation-delay: 0.1s; }
          .intro-container h1 span:nth-child(2) { animation-delay: 0.2s; }
          .intro-container h1 span:nth-child(3) { animation-delay: 0.3s; }
          .intro-container h1 span:nth-child(4) { animation-delay: 0.4s; }
          .intro-container h1 span:nth-child(5) { animation-delay: 0.5s; }
          .intro-container h1 span:nth-child(6) { animation-delay: 0.6s; }
          .intro-container h1 span:nth-child(7) { animation-delay: 0.7s; }
          .intro-container h1 span:nth-child(8) { animation-delay: 0.8s; }

          .intro-container h2 {
            font-size: clamp(1.5rem, 5vw, 3rem);
            margin: 10px 0;
            margin-bottom: 30px;
            color: #66756a;
            font-weight: bold;
            animation: slideUp 1.25s ease-out;
          }
          
          /* Text Animation */
          .intro-text-container p {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            color: #66756a;
            animation: fadeIn 1.5s ease-in-out;
            animation-delay: 0.5s; 
            opacity: 0; /* Hidden by default */
            animation-fill-mode: forwards;
          }

          /* Intro Caption */
          .intro-caption-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            width: 100%;
            max-width: 800px; /* Increased width */
          }

          .intro-text-container {
            max-width: 100%;
            width: 100%; /* Ensures full width */
          }

          @media (max-width: 768px) {
            .intro-container h1 {
              margin: 10px 0;
            }

            .intro-caption-container {
              flex-direction: column;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .intro-container h1 {
              font-size: 2rem;
            }

            .intro-container h2 {
              font-size: 1.5rem;
            }

            .intro-caption-container {
              gap: 10px;
            }

            .intro-text-container p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="watermark"></div>
      <div className="intro-container">
        <h1>
          <span style={{ color: "#0A3163" }}>SC</span>
          <span style={{ color: "#2592D6" }}>RI</span>
          <span style={{ color: "#534AA1" }}>BB</span>
          <span style={{ color: "#8F529C" }}>L</span>
          <span style={{ color: "#E38CC3" }}>ES</span>
          <span style={{ color: "#EB680A" }}>P</span>
          <span style={{ color: "#EBA425" }}>AC</span>
          <span style={{ color: "#0A3163" }}>E</span>
        </h1>

        <h2>Your Ultimate Note-Taking Companion!</h2>
        <div className="intro-caption-container">
          <div className="intro-text-container">
            <p>
              Welcome to SCRIBBLESPACE: Enjoy seamless user authentication,
              top-notch security for your personal notes, and an awesome
              platform designed to keep your thoughts organized and accessible
              anytime, anywhere. Capture ideas, craft stories, and never miss a
              moment of inspiration with SCRIBBLESPACE.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
