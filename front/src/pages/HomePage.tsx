import React, { useState, useEffect } from "react";
import CircleImage from "../component/CircleImage";
import Stars from "../component/Stars";
import "../assets/stars.css";
import "../assets/homepage.css";

function HomePage() {
  const [activeStars1, setActiveStars1] = useState(false);
  const [activeStars2, setActiveStars2] = useState(false);
  const [activeStars3, setActiveStars3] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setActiveStars1(true);
    }, 100); // Ajouter la classe "active" à Stars2 après 0,5 seconde

    const timeout2 = setTimeout(() => {
      setActiveStars2(true);
    }, 500); // Ajouter la classe "active" à Stars2 après 0,5 seconde

    const timeout3 = setTimeout(() => {
      setActiveStars3(true);
    }, 1200); // Ajouter la classe "active" à Stars3 après 1 seconde

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="HomePage">
      {/* <Header /> */}
      <section className="section--left">
        <CircleImage />
        {activeStars1 && (
          <Stars
            starsName={activeStars1 && "stars1"}
            active={activeStars1 && "active"}
          />
        )}
        {activeStars2 && (
          <Stars
            starsName={activeStars2 && "stars2"}
            active={activeStars2 && "active"}
          />
        )}
        {activeStars3 && (
          <Stars
            starsName={activeStars3 && "stars3"}
            active={activeStars3 && "active"}
          />
        )}
        <h1>test</h1>
      </section>
    </div>
  );
}

export default HomePage;
