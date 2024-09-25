import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Level1 = ({ setCompletedLevels }) => {
  const navigate = useNavigate(); // For navigation to next level
  const [deck, setDeck] = useState([]);
  const [deckIndex, setDeckIndex] = useState(null); // Track the current deck index
  const [selectedCards1, setSelectedCards1] = useState({});
  const [selectedCards2, setSelectedCards2] = useState({});
  const [selectedCards3, setSelectedCards3] = useState({});
  const [selectedCards4, setSelectedCards4] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [result, SetResult] = useState([]);
  const [sc, setsc] = useState(0);
  // const [countdown, setCountdown] = useState(3000);

  const handleCompleteLevel1 = () => {
    // Mark level 1 as completed
    const completedLevels = { level1: true };
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    setCompletedLevels(completedLevels);
    // Automatically navigate to level 2
    navigate("/level2");
  };

  const initialDeck = [
    { id: 1, text: "Reassure" },
    { id: 2, text: "Apply tourniquets tightly to occlude blood flow" },
    { id: 3, text: "Immobilize like a fractured limb" },
    { id: 4, text: "Do suction at wound site" },
    { id: 5, text: "Apply turmeric/antiseptic ointment to local wound" },
    { id: 6, text: "Make an incision at the bite site" },
    {
      id: 7,
      text: "Traditional healers can be consulted because they are locally accessible",
    },
    { id: 8, text: "Go to nearest hospital" },
    { id: 9, text: "Tell the doctor of any emergent sign" },
    { id: 10, text: "Try to capture the snake or take a picture of the snake" },
  ];

  const correctSequence = [
    { id: 1, text: "Reassure" },
    { id: 3, text: "Immobilize like a fractured limb" },
    { id: 8, text: "Go to nearest hospital" },
    { id: 9, text: "Tell the doctor of any emergent sign" },
  ];

  useEffect(() => {
    setDeck(initialDeck); // Set the first card as the initial card
  }, []);

  // useEffect(() => {
  //   const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
  //   setDeck(shuffledDeck);
  // }, []);

  useEffect(() => {
    if (
      selectedCards1.text !== undefined &&
      selectedCards2.text !== undefined &&
      selectedCards3.text !== undefined &&
      selectedCards4.text !== undefined
    ) {
      res();
    }
  }, [selectedCards1, selectedCards2, selectedCards3, selectedCards4]);

// Function to select a card from the deck
const selectCard = (card, boxSetter) => {
  if (!card || !card.text) return;
  boxSetter(card); // Set the selected card in the respective box

  // Remove selected card from deck and show the next card
  const newDeck = deck.filter((c) => c.id !== card.id);
  setDeck(newDeck);
  if (newDeck.length > 0) {
    setDeckIndex(0); // Show the first card from the remaining deck
  } else {
    setDeckIndex(null); // No more cards left in the deck
  }
};

// Function to move to the next card in the deck
const showNextCard = () => {
  if (deckIndex === null) {
    setDeckIndex(0); // Show the first card on the first click
  } else if (deckIndex < deck.length - 1) {
    setDeckIndex(deckIndex + 1); // Show the next card
  } else {
    setDeckIndex(0); // Reset to the first card when the deck ends
  }
};

  // useEffect(() => {
  //   if (countdown <= 0) {
  //     resetGame(); // Reload the page when countdown reaches zero
  //     return;
  //   }

  //   // Set the interval to decrease countdown every second (1000 ms)
  //   const timer = setInterval(() => {
  //     setCountdown((prev) => prev - 1);
  //   }, 1000);

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(timer);
  // }, [countdown]);

  // const shuffle = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // let x = 0;
  // const getRandomObject = () => {
  //   const randomIndex = Math.floor(Math.random() * initialDeck.length);
  //   return initialDeck[randomIndex];
  // };

  // const initialfun = () => {
  //   setDeck(getRandomObject());
  // };

  const getText1 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      // console.log(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      setSelectedCards1(deck);
      setDeck(initialDeck[1]); // Move to the next card in the deck
      // initialfun();
      // Remove selected card from deck
      // const remainingDeck = deck.filter((card) => card.id !== deck.id);
      // setDeck(remainingDeck);

      // handleBoxClick(deck, setSelectedCards2, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText2 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards2(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      setDeck(initialDeck[2]); // Move to the next card in the deck
      // initialfun();
      // Remove selected card from deck
      // const remainingDeck = deck.filter((card) => card.id !== deck.id);
      // setDeck(remainingDeck);

      // handleBoxClick(setSelectedCards1, deck, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText3 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards3(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      setDeck(initialDeck[3]); // Move to the next card in the deck
      // initialfun();
      // Remove selected card from deck
      // const remainingDeck = deck.filter((card) => card.id !== deck.id);
      // setDeck(remainingDeck);

      // handleBoxClick(setSelectedCards1, setSelectedCards2, deck, setSelectedCards4); // Remove the arguments here
    }
  };

  const getText4 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards4(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      setDeck({}); // No more cards left in the deck after 4 selections
      // initialfun();
      // Remove selected card from deck
      // const remainingDeck = deck.filter((card) => card.id !== deck.id);
      // setDeck(remainingDeck);

      // handleBoxClick(setSelectedCards1, setSelectedCards2, setSelectedCards3 , deck); // Remove the arguments here
    }
  };

  const res = () => {
    // Create an array of selected cards
    const selectedCards = [
      selectedCards1.text,
      selectedCards2.text,
      selectedCards3.text,
      selectedCards4.text,
    ];
  
    // Create an array of correct cards
    const correctCards = correctSequence.map((card) => card.text);
  
    // Check if all selected cards exist in the correct sequence (regardless of order)
    const isCorrect = selectedCards.every((selectedCard) =>
      correctCards.includes(selectedCard)
    );
  
    if (isCorrect) {
      console.log("correct");
      setShowSuccessPopup(true); 
      localStorage.setItem("level1Result", JSON.stringify(selectedCards));
    } 
    else {
      console.log("incorrect");
      setShowWrongPopup(true); // Show wrong popup
    }
  };
  

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel1();
  };

  const resetGame = () => {
    // setCountdown(3000);
    // Reset the selected cards
    setSelectedCards1({});
    setSelectedCards2({});
    setSelectedCards3({});
    setSelectedCards4({});
    setDeck(initialDeck); // Reset to the first card in the deck
    // setDeckIndex(null); // Reset deck index

    // Reshuffle the deck
    // const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    // setDeck(reshuffledDeck);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold mx-auto mr-54">
          Choose option from deck
        </h2>
      </div>

      <div className="w-full h-70 m-7 flex flex-col items-center ml-1">
        <div
          className="relative w-60 h-72 cursor-pointer "
          onClick={showNextCard}
        >
          <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
          <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
          <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
          <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
          <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
            <p className="text-center text-xl">{deck[deckIndex]?.text}</p>
          </div>
        </div>

        <div className="text-xl w-full h-30">
          <div>
            <h2 className="text-center text-lg font-bold mt-14">
              Select Correct option
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={() => selectCard(deck[deckIndex], setSelectedCards1)}
            >
              <p className="text-md text-center">{selectedCards1.text}</p>
            </div>
            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={() => selectCard(deck[deckIndex], setSelectedCards2)}
            >
              <p className="text-md text-center">{selectedCards2.text}</p>
            </div>

            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={() => selectCard(deck[deckIndex], setSelectedCards3)}
            >
              <p className="text-md text-center">{selectedCards3.text}</p>
            </div>
            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={() => selectCard(deck[deckIndex], setSelectedCards4)}
            >
              <p className="text-md text-center">{selectedCards4.text}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-10">
          {/* <h2 className="text-xl text-blue-600 font-bold">
            Time Remaining: {countdown} seconds
          </h2> */}
        </div>

        {/* Success Popup for Correct Sequence */}
        {showSuccessPopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" // Added z-50 here
          >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center z-50">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Correct!
              </h2>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSuccessClose}
              >
                Proceed to the next level
              </button>
            </div>
          </div>
        )}

        {/* Wrong Popup for Incorrect Sequence */}
        {showWrongPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-red-400 mb-4">
                Incorrect!
              </h2>
              <p className="mb-6">You have selected the wrong option.</p>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setShowWrongPopup(false);
                  resetGame();
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1;
