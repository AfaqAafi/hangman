
const Word = ({ word, guessedLetters }) => {
  const getDisplayWord = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  return <div>{getDisplayWord()}</div>;
};


export default Word;
