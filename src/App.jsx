import { useState } from "react";
import Hangman from "./components/Hangman";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";

const App = () => {
  const words = ["CSS", "REACT", "JAVASCRIPT", "NEXT"];
  const maxMistakes = 6;

  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toUpperCase());
    setGuessedLetters([]);
    setMistakes(0);
  };

  const handleKeyClick = (key) => {
    const newGuessedLetters = [...guessedLetters, key];

    if (!selectedWord.includes(key)) {
      setMistakes(mistakes + 1);
    }

    setGuessedLetters(newGuessedLetters);
  };

  const isGameOver = mistakes >= maxMistakes;
  const isGameWon = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div>
      <h1>Hangman Game</h1>
      <button onClick={startNewGame}>Start New Game</button>
      <Hangman mistakes={mistakes} />
      <Word word={selectedWord} guessedLetters={guessedLetters} />
      {!isGameOver && !isGameWon && (
        <Keyboard disabledKeys={guessedLetters} onKeyClick={handleKeyClick} />
      )}
      {isGameOver && <p>Game Over! The word was: {selectedWord}</p>}
      {isGameWon && <p>Congratulations! You won!</p>}
    </div>
  );
};

export default App;
