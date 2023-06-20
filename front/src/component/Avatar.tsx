import "../assets/header.css";
import "../assets/images.css";
import React, { useState, useEffect } from "react";
import coeur from "../assets/images/coeur.png";
import crayon from "../assets/images/crayon.png";
import fleur from "../assets/images/fleur.png";
import oeuf from "../assets/images/oeuf.png";

let arrayImages = [coeur, crayon, fleur, oeuf];
export default function Avatar() {
  const [currentImage, setCurrentImage] = useState(arrayImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = arrayImages.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % arrayImages.length;
      setCurrentImage(arrayImages[nextIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);
  return (
    <div className="avatar_container">
      <div className="behind_avatar" />
      <div className="avatar">
        <img className="images" alt="images" src={currentImage} />
      </div>
    </div>
  );
}
