import "../assets/avatar.css";
import "../utils/formater";
import { formaterDate } from "../utils/formater";
export default function Header() {
  const date = new Date();
  return (
    <div className="header">
      <div>CITATION ET ANNIVERSAIRES</div>
      <div>{formaterDate(date)}</div>
    </div>
  );
}
