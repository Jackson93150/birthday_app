import stars from '../assets/images/Stars.svg';


interface Props {
  starsName: string;
}

export default function Stars({starsName }: Props) {
  return (
    <div className={starsName} >
      <img src={stars} alt={starsName} />
    </div>
  );
}
