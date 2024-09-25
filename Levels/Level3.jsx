import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Level3 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();
  const [level2Selection, setLevel2Selection] = useState(null);
  const [clue, setClue] = useState(""); // Store the clue text
  const [deck, setDeck] = useState([]);
  const [deckIndex, setDeckIndex] = useState(null); // Track the current deck index
  const [selectedCards1, setSelectedCards1] = useState({});
  const [selectedCards2, setSelectedCards2] = useState({});
  const [selectedCards3, setSelectedCards3] = useState({});
  const [selectedCards4, setSelectedCards4] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [result, SetResult] = useState([]);
  // const [countdown, setCountdown] = useState(3000);

  useEffect(() => {
    // Retrieve the selection from Level 2 from localStorage
    const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
    if (level2Result) {
      setLevel2Selection(level2Result);
    }
  }, []);

  const handleCompleteLevel3 = (path) => {
    // Mark level 3 as completed
    const completedLevels = {
      level1: true,
      level2: true,
      level3: true,
    };
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    
    const array = [];
    array.push(selectedCards1.text);
    array.push(selectedCards2.text);
    array.push(selectedCards3.text);
    array.push(selectedCards4.text);

    console.log(array);
    localStorage.setItem("level3Result", JSON.stringify(array));
    setCompletedLevels(completedLevels);

    navigate(path); // Use the passed path to navigate
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
    { id: 1, text: "Secure Respiratory and Airway" },
    { id: 2, text: "Admission" },
    { id: 3, text: "Start IVF with NS/5D" },
    { id: 4, text: "Inj. TT" },
    { id: 5, text: "Secure Airway" },
    { id: 6, text: "Avoid I/V cannula insertion in case of Haemotoxic bite" },
    { id: 7, text: "Avoid any IM or IV injections" },
    { id: 8, text: "Start Antibiotics immediately" },
    { id: 9, text: "Sedate with Diazepam" },
  ];

  // Correct sequence of cards
  const correctSequence = [
    { id: 1, text: "Secure Respiratory and Airway" },
    { id: 2, text: "Admission" },
    { id: 3, text: "Start IVF with NS/5D" },
    { id: 4, text: "Inj. TT" },
  ];

  // Shuffle the deck when the component mounts
  // useEffect(() => {
  //   const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
  //   setDeck(shuffledDeck);
  // }, []);

  // No shuffling; set the deck directly as is
  useEffect(() => {
    setDeck(initialDeck); // Set the deck without shuffling
  }, []);

  // / Function to select a card from the deck
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

  const getText1 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards1(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      // initialfun();
      // handleBoxClick(deck, setSelectedCards2, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText2 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards2(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      // initialfun();
      // handleBoxClick(setSelectedCards1, deck, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText3 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards3(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      // initialfun();
      // handleBoxClick(setSelectedCards1, setSelectedCards2, deck, setSelectedCards4);
    }
  };

  const getText4 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards4(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      // initialfun();
      // handleBoxClick(setSelectedCards1, setSelectedCards2, setSelectedCards3);
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
      localStorage.setItem("level3Result", JSON.stringify(selectedCards));
    } 
    else {
      console.log("incorrect");
      setShowWrongPopup(true); // Show wrong popup
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel3();
  };

  const resetGame = () => {
    setSelectedCards1({});
    setSelectedCards2({});
    setSelectedCards3({});
    setSelectedCards4({});
    SetResult([]);  // Clear the result array as well
    setDeck(initialDeck); // Reset the deck to the initial order
    setShowSuccessPopup(false); // Hide the success popup
    setShowWrongPopup(false);   // Hide the wrong popup
  
    // // Reshuffle the deck
    // const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    // setDeck(reshuffledDeck);
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

  const codeSelection = () => {
    const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
    for (let i = 0; i < level2Result.length; i++) {
      if (level2Result[i] === "X") {
        return false;
      }
    }
    return true;
    // console.log(level2Result);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        {/* <h2 className="text-xl font-bold mx-auto mr-54">Choose card from deck</h2> */}
        <h2 className="text-2xl font-bold text-blue-400 mx-auto mr-50">
          Initial Management
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Correct!
              </h2>
              {codeSelection() ? (
                <button
                  onClick={() => handleCompleteLevel3("/level4")} // Redirect to Level 4
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Sign of Envenomation
                </button>
              ) : (
                <button
                  onClick={() => handleCompleteLevel3("/level5")} // Redirect to Level 5
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  No Sign of Envenomation
                </button>
              )}
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

export default Level3;
