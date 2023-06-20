import { useEffect, useState } from "react";
import "../assets/jauge.css";


export default function Jauge() {
  const arrayImages = ["coeur", "crayon", "oeuf", "fleur"];
  const colors: string[] = ["#DF80AC", "#579FF4", "#FCB325", "#098E27"];
  const [currentImage, setCurrentImage] = useState(arrayImages[0]);

  useEffect(() => {
    const progressJauge = () => {
      let currentWidth = 0;
      let currentIndex = 0;
      const increment = 1;
      const duration = 2;
      const intervalTime = (duration * 1000) / 100;

      const interval = setInterval(() => {
        currentWidth += increment;
        const jaugeFond = document.querySelector(".jauge-fond") as HTMLElement;
      if (jaugeFond) {
        jaugeFond.style.width = `${currentWidth}%`;
      }

        if (currentWidth >= 100) {
          currentWidth = 0;
          currentIndex+= 1;
          if(currentIndex === 4){
            currentIndex = 0;
          }
          if (jaugeFond) {
            jaugeFond.style.backgroundColor = `${colors[currentIndex]}`;
          }
        }
      }, intervalTime);

      return () => {
        clearInterval(interval);
      };
    };

    progressJauge();
  }, []);

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
    <div className="jauge">
      <div className="jauge-fond"></div>
    </div>
  );
}
