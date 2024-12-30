import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';
import './App.css';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [winner, setWinner] = useState(null); // 승리자를 추적

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) {
      setScore(score + bet);
      setWinner('me'); // 내가 이겼다면 'me'
    } else if (comparison < 0) {
      setOtherScore(otherScore + bet);
      setWinner('other'); // 상대가 이겼다면 'other'
    } else {
      setWinner(null); // 비겼을 경우
    }
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    /* 1과 9 사이의 정수만 전달되도록 하기 */
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };
  
  return (
    <div className='App'>
      <h1 className='App-heading'>가위바위보</h1>
      <Button onClick={handleClearClick} />
      <div className='App-scores'>
        <div className='Score'>
          <div className='Score-num'>{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className='Score'>
          <div className='Score-num'>{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={`Hand ${winner === 'me' ? 'winner' : ''}`}><HandIcon value={hand} /></div>
            <div className='App-versus'>VS</div>
            <div className={`Hand ${winner === 'other' ? 'winner' : ''}`}><HandIcon value={otherHand} /></div>
          </div>
          <div className='App-bet'>
            <span>배점</span><input type="number" value={bet} min={1} max={9} onChange={handleBetChange} /><span>배</span>
          </div>
          <div className='App-history'>
            <h2>승부 기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;