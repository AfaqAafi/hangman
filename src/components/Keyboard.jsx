
const Keyboard = ({ disabledKeys, onKeyClick }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleKeyClick = (key) => {
    if (!disabledKeys.includes(key)) {
      onKeyClick(key);
    }
  };

  return (
    <div>
      {letters.split("").map((key) => (
        <button
          key={key}
          onClick={() => handleKeyClick(key)}
          disabled={disabledKeys.includes(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
