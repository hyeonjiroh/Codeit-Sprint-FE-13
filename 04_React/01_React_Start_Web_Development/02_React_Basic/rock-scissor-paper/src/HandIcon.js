import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value, className='' }) {
  const src = IMAGES[value];
  const classNames = `Hand-icon ${className}`;
  return <img className={classNames} src={src} alt={value} />;
}

export default HandIcon;