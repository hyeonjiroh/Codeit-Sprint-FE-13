import resetImg from './assets/ic-reset.svg';
import './Button.css';

function Button({ onClick }) {
    return <img className='App-reset' src={resetImg} alt="초기화" onClick={onClick} />;
  }
  
  export default Button;