import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick(e) {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button className="hand" onClick={handleClick}>가위</button>
    <button className="hand" onClick={handleClick}>바위</button>
    <button className="hand" onClick={handleClick}>보</button>
  </>
);