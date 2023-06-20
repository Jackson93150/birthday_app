import React, { useState, useEffect } from "react";
import CircleImage from "../component/CircleImage";
import Stars from "../component/Stars";
import Header from "../component/Header";
import Avatar from "../component/Avatar";
import Jauge from "../component/Jauge";
import "../assets/stars.css";
import "../assets/homepage.css";
import { getBirthdays, getBirthdaysList } from "../service/api";

function HomePage() {
  const [activeStars1, setActiveStars1] = useState(false);
  const [activeStars2, setActiveStars2] = useState(false);
  const [activeStars3, setActiveStars3] = useState(false);
  const [birthdays, setBirthdays] = useState([]);
  const [name, setName] = useState<string>("");
  const colors: string[] = ["#DF80AC", "#579FF4", "#FCB325", "#098E27"];

  useEffect(() => {
    getBirthdaysList();
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const birthdaysData = await getBirthdays();
        setBirthdays(birthdaysData);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors du chargement des anniversaires :",
          error
        );
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    if (birthdays.length > 0) {
      const first_name = (birthdays[0] as { first_name: string })?.first_name;
      setName(first_name || "");
    }
  }, [birthdays]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setActiveStars1(true);
    }, 100);

    const timeout2 = setTimeout(() => {
      setActiveStars2(true);
    }, 500);

    const timeout3 = setTimeout(() => {
      setActiveStars3(true);
    }, 1200);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  useEffect(() => {
    const progressJauge = () => {
      let currentIndex = 1;
      const interval = setInterval(() => {
        const jaugeFond = document.querySelector(".jauge-fond") as HTMLElement;
        const sectionFond = document.querySelector(
          ".section--left"
        ) as HTMLElement;
        const behindAvatar = document.querySelector(
          ".behind_avatar"
        ) as HTMLElement;
        const circle = document.querySelector(".circleImg") as HTMLElement;
        
        jaugeFond.style.backgroundColor = `${colors[currentIndex]}`;
        sectionFond.style.backgroundColor = `${colors[currentIndex]}`;
        behindAvatar.style.backgroundColor = `${colors[currentIndex]}`;
        circle.style.backgroundColor = `${colors[currentIndex]}`;

        currentIndex += 1;
        if (currentIndex === 4) {
          currentIndex = 0;
          if (birthdays.length > 1) {
            const randomIndex = Math.floor(Math.random() * birthdays.length);
            const first_name = (
              birthdays[randomIndex] as { first_name: string }
            )?.first_name;
            setName(first_name || "");
          }
        }
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    };

    progressJauge();
  }, [birthdays]);

  return (
    <div className="HomePage">
      <Header />
      <section className="section--left">
        <div className="circleContainer">
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
        </div>
        <h1>{name}</h1>
      </section>
      <section className="section--right">
        <Avatar />
        <Jauge />
      </section>
    </div>
  );
}

export default HomePage;
