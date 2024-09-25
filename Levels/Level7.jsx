// PN(7)

import React, { useState, useEffect } from "react";
import CustomAlert from "./CustomAlert"; // Importing the CustomAlert component

import { useLocation, useNavigate } from "react-router-dom";

const Level7 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();
  const [deck, setDeck] = useState([]); // Track the deck of cards
  const [deckIndex, setDeckIndex] = useState(null); // Track the current deck index
  const [selectedCards, setSelectedCards] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [result, SetResult] = useState([]);
  // const [countdown, setCountdown] = useState(1000);
  const [level2Selection, setLevel2Selection] = useState(null);

  const handleCompleteLevel7 = () => {
    // Mark level 7 as completed
    const completedLevels = {
      level1: true,
      level2: true,
      level3: true,
      level4: false,
      level5: true,
      level6: true,
      level7: true,
      level8: false,
    };
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    
    const array = [];
    array.push(selectedCards.text);
    console.log(array);
    localStorage.setItem("level7Result", JSON.stringify(array));
    setCompletedLevels(completedLevels);

    // Navigate to level 8
    // navigate(level);
  };
  useEffect(() => {
    // Save the current level path to localStorage
    localStorage.setItem('currentLevel', location.pathname);

    // Retrieve current level from localStorage on reload
    const savedLevel = localStorage.getItem('currentLevel');
    if (savedLevel && savedLevel !== location.pathname) {
      navigate(savedLevel); // Navigate to the saved level if it's different
    }
  }, [location, navigate]);
  
  const initialDeck = [
    { id: 1, text: "Loading Atropine IV Neostigmine IM or IV" },
    { id: 2, text: "Atropine IV Neostigmine IM or IV maintenance dose" },
    { id: 3, text: "Loading Atropine IM Neostigmine IM or IV" },
    { id: 4, text: "Atropine IV" },
    { id: 5, text: "Neostigmine IM or IV" },
  ];

  // Correct sequence of cards
  const correctSequence = [
    { id: 1, text: "Loading Atropine IV Neostigmine IM or IV" },
  ];

  // Shuffle the deck when the component mounts
  // useEffect(() => {
  //   const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
  //   setDeck(shuffledDeck);
  // }, []);

  useEffect(() => {
    setDeck(initialDeck); // Set the first card as the initial card
  }, []);

  useEffect(() => {
    if (selectedCards.text !== undefined) {
      res();
    }
  }, [selectedCards]);

  useEffect(() => {
    // Retrieve the selection from Level 2 from localStorage
    const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
    if (level2Result) {
      setLevel2Selection(level2Result);
    }
  }, []);

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

  // Shuffle function
  // const shuffle = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // function getRandomObject() {
  //   const randomIndex = Math.floor(Math.random() * initialDeck.length);
  //   return initialDeck[randomIndex];
  // }

  // const initialfun = () => {
  //   setDeck(getRandomObject());
  // };

  // const getText = () => {
  //   if (deck.text === undefined) {
  //     alert("Please select the card from the deck");
  //   } else {
  //     setSelectedCards(deck);
  //     SetResult((prevResult) => [...prevResult, deck]);
  //     initialfun();
  //     // handleBoxClick(setSelectedCards);
  //   }
  // };

  const res = () => {
    // Create an array of selected cards
    const selectCard = [selectedCards.text];

    // Create an array of correct cards
    const correctCards = correctSequence.map((card) => card.text);

    // Check if all selected cards exist in the correct sequence (regardless of order)
    const isCorrect = selectCard.every((selectedCard) =>
      correctCards.includes(selectedCard)
    );

    if (isCorrect) {
      console.log("correct");
      setShowSuccessPopup(true);
      localStorage.setItem("level7Result", JSON.stringify(selectCard));
    } else {
      console.log("incorrect");
      setShowWrongPopup(true); // Show wrong popup
    }
  };

  // const handleBoxClick = () => {
  //   if (selectedCards) {
  //     const userSequence = [selectedCards];
  //     const correctSequenceIds = correctSequence.map((card) => card.id);
  //     const userSequenceIds = userSequence.map((card) => card.id);
  //     if (userSequenceIds.join(",") === correctSequenceIds.join(",")) {
  //       setShowSuccessPopup(true); // Show success popup
  //     } else {
  //       setShowWrongPopup(true); // Show wrong popup
  //     }
  //   }
  // };

  const handleSuccessClose = (nextLevel) => {
    setShowSuccessPopup(false);
    // Update completedLevels

    const completedLevels = JSON.parse(localStorage.getItem("completedLevels"));
    completedLevels.level7 = true; // Mark Level 7 as completed
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    setCompletedLevels(completedLevels);

    // Navigate to the next level
    navigate(nextLevel);
  };

  const resetGame = () => {
    // setCountdown(1000);
    // Reset the selected cards
    setSelectedCards({});
    setDeck(initialDeck); // Reset to the first card in the deck
    // Reset the index to start from the first card
    setDeckIndex(0);
    // Reshuffle the deck
    // const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    // setDeck(reshuffledDeck);
  };

  // const codeSelection = () => {
  //   const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
  //   for (let i = 0; i < level2Result.length; i++) {
  //     if (level2Result[i] === "H") {
  //       return false;
  //     }
  //   }
  //   return true;
  //   // console.log(level2Result);
  // };

  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        {/* <h2 className="text-xl font-bold mx-auto mr-54">Choose card from deck</h2> */}
        <h2 className="text-2xl font-bold text-blue-400 mx-auto mr-50">
          Neurological signs:
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
              onClick={() => selectCard(deck[deckIndex], setSelectedCards)}
            >
              <p className="text-md text-center">{selectedCards.text}</p>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full mt-10">
          <h2 className="text-xl text-blue-600 font-bold">
            Time Remaining: {countdown} seconds
          </h2>
        </div> */}

        {/* Success Popup for Correct Sequence */}
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Correct!
              </h2>
              <button
                onClick={() => handleSuccessClose("/level9")} // Navigate to Level 9
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Hint: Improving after 30 min
              </button>

              <button
                onClick={() => handleSuccessClose("/level10")} // Navigate to Level 10
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Hint: Not improving after 30 min
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
              <p className="mb-6">You have selected the wrong sequence.</p>
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
export default Level7;
