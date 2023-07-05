
const Hangman = ({ mistakes }) => {
  const hangmanImages = [
    "https://www.shutterstock.com/shutterstock/photos/1940306173/display_1500/stock-vector--hanging-rope-gallows-and-gate-silhouette-dramatic-creepy-horror-scary-mystery-or-spooky-1940306173.jpg",
    "https://www.shutterstock.com/shutterstock/photos/553682593/display_1500/stock-vector-hanged-businessman-business-concept-553682593.jpg",
    "/hang.jpeg",
  ];

  const hangmanImage = hangmanImages[mistakes];

  return (
    <div>
      <img width='200'
        src={`${hangmanImage}`}
        alt={`Hangman`}
      />
    </div>
  );
};


export default Hangman;
