import "../assets/circle.css";
import image from '../assets/images/CircleImage.png';

export default function CircleImage() {
  return (
    <div className="circle">
      <div className="blackBack"/>
      <img src={image} className="circleImg" alt="Circle" />
    </div>
  );
}