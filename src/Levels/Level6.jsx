// AR (6)

import React, { useState, useEffect } from "react";
import CustomAlert from "./CustomAlert"; // Importing the CustomAlert component
import { useNavigate } from "react-router-dom";

const Level6 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();
  const [deck, setDeck] = useState({});
  const [selectedCards1, setSelectedCards1] = useState({});
  const [selectedCards2, setSelectedCards2] = useState({});
  const [selectedCards3, setSelectedCards3] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [result, SetResult] = useState([]);
  const [countdown, setCountdown] = useState(30);
  const [level2Selection, setLevel2Selection] = useState(null);

  const handleCompleteLevel6 = () => {
    // Mark level 6 as completed
    const completedLevels = {
      level1: true,
      level2: true,
      level3: true,
      level4: true,
      level5: true,
      level6: true,

    };
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    setCompletedLevels(completedLevels);
// console.log(level);

    // Navigate to level 7
    if (codeSelection()) {
      // Navigate to Level 7
      navigate("/level7");
    } else {
      // Navigate to Level 8
      navigate("/level8");
    }
  };

  const initialDeck = [
    { id: 1, text: "Inj. Adrenalin" },
    { id: 2, text: "0.25 ml" },
    { id: 3, text: "IM" },
    { id: 4, text: "1 ml" },
    { id: 5, text: "IV" },
    { id: 6, text: "SC" },
    { id: 7, text: "Inj. Hydrocortisone" },
    { id: 8, text: "Inj. Promethazine" },
    { id: 9, text: "Inj. Prochlorperazine" },
  ];

  // Correct sequence of cards
  const correctSequence = [
    { id: 1, text: "Inj. Adrenalin" },
    { id: 2, text: "0.25 ml" },
    { id: 3, text: "IM" },
  ];

  // Shuffle the deck when the component mounts
  useEffect(() => {
    const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(shuffledDeck);
  }, []);

  useEffect(() => {
    if (
      selectedCards1.text !== undefined &&
      selectedCards2.text !== undefined &&
      selectedCards3.text !== undefined
    ) {
      res();
    }
  }, [selectedCards1, selectedCards2, selectedCards3]);

  useEffect(() => {
    // Retrieve the selection from Level 2 from localStorage
    const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
    if (level2Result) {
      setLevel2Selection(level2Result);
    }
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.reload(); // Reload the page when countdown reaches zero
      return;
    }

    // Set the interval to decrease countdown every second (1000 ms)
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]);

  // Shuffle function
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function getRandomObject() {
    const randomIndex = Math.floor(Math.random() * initialDeck.length);
    return initialDeck[randomIndex];
  }

  const initialfun = () => {
    setDeck(getRandomObject());
  };

  const getText1 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards1(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(deck, setSelectedCards2, setSelectedCards3);
    }
  };

  const getText2 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards2(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards1, deck, setSelectedCards3);
    }
  };
  const getText3 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards3(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards1, setSelectedCards2, deck);
    }
  };

  const res = () => {
    // console.log('sdsds');
    console.log(selectedCards1);
    console.log(selectedCards2);
    console.log(selectedCards3);

    if (
      selectedCards1.id === correctSequence[0].id &&
      selectedCards2.id === correctSequence[1].id &&
      selectedCards3.id === correctSequence[2].id
    ) {
      // console.log('correct');
      setShowSuccessPopup(true);
    } else {
      // console.log("incorrect");
      setShowWrongPopup(true); // Show wrong popup
    }

    // if(result.length>=3){
    //   console.log(result);

    // }
  };

  const handleBoxClick = () => {
    if (selectedCards1 && selectedCards2 && selectedCards3) {
      const userSequence = [selectedCards1, selectedCards2, selectedCards3];
      const correctSequenceIds = correctSequence.map((card) => card.id);
      const userSequenceIds = userSequence.map((card) => card.id);
      if (userSequenceIds.join(",") === correctSequenceIds.join(",")) {
        setShowSuccessPopup(true); // Show success popup
      } else {
        setShowWrongPopup(true); // Show wrong popup
      }
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel6();
  };

  const resetGame = () => {
    // Reset the selected cards
    setSelectedCards1({});
    setSelectedCards2({});
    setSelectedCards3({});

    // Reshuffle the deck
    const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(reshuffledDeck);
  };

  const codeSelection = () => {
    const level2Result = JSON.parse(localStorage.getItem("level2Result")) || [];
    for (let i = 0; i < level2Result.length; i++) {
      if (level2Result[i] === "H") {
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
        AVS reaction:
        </h2>
      </div>

      <div className="w-full h-70 m-7 flex flex-col items-center ml-1">
        <div
          className="relative w-60 h-72 cursor-pointer "
          onClick={initialfun}
        >
          <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
          <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
          <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
          <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
          <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
            <p className="text-center text-xl">{deck.text}</p>
          </div>
        </div>

        <div className="text-xl w-full h-30">
          <div>
            <h2 className="text-center text-lg font-bold mt-14">
              Select Correct Cards
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText1}
            >
              <p className="text-md text-center">{selectedCards1.text}</p>
            </div>
            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText2}
            >
              <p className="text-md text-center">{selectedCards2.text}</p>
            </div>

            <div
              className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText3}
            >
              <p className="text-md text-center">{selectedCards3.text}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-10">
          <h2 className="text-xl text-blue-600 font-bold">
            Time Remaining: {countdown} seconds
          </h2>
        </div>

        {/* Success Popup for Correct Sequence */}
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Correct!
              </h2>
              {codeSelection() ? (
            <button onClick={() => handleCompleteLevel6()}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >Clue: Neurological sign</button>
          ) : (
            <button onClick={() => handleCompleteLevel6()}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >Clue: Sign of Bleeding</button>
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

export default Level6;
