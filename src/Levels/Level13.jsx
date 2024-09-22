// PNIa(13) -> Submit

import React, { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert'; // Importing the CustomAlert component
import { useNavigate } from "react-router-dom";

const Level13 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();
  const [deck, setDeck] = useState({});
  const [selectedCards, setSelectedCards] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const handleCompleteLevel13 = () => {
    // Mark level 10 as completed
    const completedLevels = { level1: true, level2: true, level3: true, level4: true, level5: true, level6:true, level7: true, level8:true, level9:true, level10:true, level11:true, level12:true, level13:true, level14:false };
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    setCompletedLevels(completedLevels);

    // Navigate to level 11
    // navigate("/level14");
  };

  const initialDeck = [
    { id: 1, text: 'Discharge only when no neuro-deficit present' },
    { id: 2, text: 'Discharge after 6 hours' },
    { id: 3, text: 'Discharge after 24 hours irrespective of improvement' },
    { id: 4, text: 'Transfer to referral hospital' }
  ];

  // Correct sequence of cards
  const correctSequence = [
    { id: 1, text: 'Discharge only when no neuro-deficit present' }
  ];
  
  // Shuffle the deck when the component mounts
  useEffect(() => {
    const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(shuffledDeck);
  }, []);

  useEffect(() => {
    if (
      selectedCards.text !== undefined 
    ) {
      res();
    }
  }, [selectedCards]);

  useEffect(() => {
    if (countdown <= 0) {
      resetGame(); // Reload the page when countdown reaches zero
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

  const getText = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards);
    }
  };

  const res = () => {
    // console.log('sdsds');
    console.log(selectedCards);

    if (
      selectedCards.id === correctSequence[0].id 
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
    if (selectedCards ) {
      const userSequence = [selectedCards];
      const correctSequenceIds = correctSequence.map((card) => card.id);
      const userSequenceIds = userSequence.map((card) => card.id);
      if (userSequenceIds.join(',') === correctSequenceIds.join(',')) {
        setShowSuccessPopup(true); // Show success popup
      } else {
        setShowWrongPopup(true); // Show wrong popup
      }
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel13();
  };

  const resetGame = () => {
    setCountdown(30);
    // Reset the selected cards
    setSelectedCards({});
    
    // Reshuffle the deck
    const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(reshuffledDeck);
  };

  // const handleWrongClose = () => {
  //   // setShowWrongPopup(false);
  //   // Optional: Reset the selected cards here if necessary
  // };

  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        {/* <h2 className="text-xl font-bold mx-auto mr-54">Choose card from deck</h2> */}
        <h2 className="text-2xl font-bold text-blue-400 mx-auto mr-50">
        Improving:
            </h2>
        
      </div>
  
      <div className="w-full h-70 m-7 flex flex-col items-center ml-1">
        <div className="relative w-60 h-72 cursor-pointer " onClick={initialfun}>
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
              onClick={getText}
            >
              <p className="text-md text-center">{selectedCards.text}</p>
            </div>
          </div>
          
        </div>
        <div className="flex w-full mt-10">
          <h2 className="text-xl text-blue-600 font-bold">Time Remaining: {countdown} seconds</h2>
        </div>

        {/* Success Popup for Correct Sequence */}
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Correct!</h2>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSuccessClose}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* Wrong Popup for Incorrect Sequence */}
        {showWrongPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Incorrect!</h2>
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

export default Level13;
