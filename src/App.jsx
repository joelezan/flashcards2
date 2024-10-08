import { useState } from 'react';
import './App.css';
import Card from './components/card.jsx';
import rightArrow from './assets/rightarrow.jpg';
import leftArrow from './assets/leftarrow.jpg';

function App() {
  const statesAndCapitals = {
    Texas: 'Austin',
    Florida: 'Tallahassee',
    California: 'Sacramento',
    NewYork: 'Albany',
    Illinois: 'Springfield',
    Georgia: 'Atlanta',
    Ohio: 'Columbus',
    NorthCarolina: 'Raleigh',
    Michigan: 'Lansing',
    Pennsylvania: 'Harrisburg',
    Arizona: 'Phoenix',
    Virginia: 'Richmond',
  };

  const [stateNames, setStateNames] = useState(Object.keys(statesAndCapitals));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentState, setCurrentState] = useState(stateNames[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < stateNames.length - 1 ? prevIndex + 1 : 0
    );
    setIsFlipped(false);
    setFeedbackColor('');
    setCurrentState(stateNames[currentIndex + 1]);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : stateNames.length - 1
    );
    setIsFlipped(false);
    setFeedbackColor('');
    setCurrentState(stateNames[currentIndex - 1]);
  };

  const handleShuffle = () => {
    const shuffled = [...stateNames].sort(() => Math.random() - 0.5);
    setStateNames(shuffled);
    setCurrentIndex(0);
    setCurrentState(shuffled[0]);
    setIsFlipped(false);
  };

  const handleSubmitGuess = () => {
    if (guess.toLowerCase() === statesAndCapitals[currentState].toLowerCase()) {
      setFeedbackColor('blue');
    } else {
      setFeedbackColor('red');
    }
  };

  return (
    <div className="App">
      <div className="textHeader">
        <h1>Know the States, Know your Country!</h1>
        <h2>How well do you know your country? Let's see!</h2>
        <h5>Number of cards: {stateNames.length}</h5>
      </div>

      <div className="flashcards" onClick={handleFlip}>
        <Card
          question="What is the capital of"
          stateName={currentState}
          isFlipped={isFlipped}
          answer={statesAndCapitals[currentState]}
        />
      </div>

      <div className="guess">
        <h3>Guess the answer here:</h3>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Place your answer here..."
          style={{ borderColor: feedbackColor }}
        />
        <button type="button" onClick={handleSubmitGuess}>
          Submit Guess
        </button>
      </div>

      <div className="navigation">
        <button onClick={handleBack}>
          <img className="arrowImage" src={leftArrow} alt="Previous" />
        </button>
        <button onClick={handleNext}>
          <img className="arrowImage" src={rightArrow} alt="Next" />
        </button>
        <button onClick={handleShuffle}>Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;
