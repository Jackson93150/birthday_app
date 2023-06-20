import stars from '../assets/images/Stars.svg';

interface Props {
  starsName: string;
  active: string;
}

export default function Stars({ starsName,active }: Props) {
  return (
    <div className={`stars ${starsName} ${active}`}>
      <img src={stars} alt={starsName} />
    </div>
  );
}

