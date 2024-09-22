import React, { useState, useEffect } from 'react';

const Level3 = ({ onNext }) => {
  const initialDeck = [
    {id: 1, text: 'Secure Respiratory and Airway'},
    {id: 2, text: 'Admission'},
    {id: 3, text: 'Start IVF with NS/5D'},
    {id: 4, text: 'Inj. TT'},
    {id: 5, text: 'Secure Airway'},
    {id: 6, text: 'Avoid I/V cannula insertion in case of Haemotoxic bite'},
    {id: 7, text: 'Avoid any IM or IV injections'},
    {id: 8, text: 'Start Antibiotics immediately'},
    {id: 9, text: 'Sedate with Diazepam'}
  ];

  // Correct sequence
  const correctSequence = [
    {id: 1, text: 'Secure Respiratory and Airway'},
    {id: 5, text: 'Admission'},
    {id: 6, text: 'Start IVF with NS/5D'},
    {id: 7, text: 'Inj. TT'}
  ];

  const [selectedCards1, setSelectedCards1] = useState({});
  const [selectedCards2, setSelectedCards2] = useState({});
  const [selectedCards3, setSelectedCards3] = useState({});
  const [selectedCards4, setSelectedCards4] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  // Function to check the selected sequence with the correct sequence
  const checkSequence = () => {
    const selectedSequence = [selectedCards1, selectedCards2, selectedCards3, selectedCards4];

    // Check if the selected sequence matches the correct sequence
    const isCorrect = selectedSequence.every((card, index) => card.id === correctSequence[index].id);

    if (isCorrect) {
      setShowSuccessPopup(true);
    } else {
      setAlertVisible(true);
    }
  };

  // Functions to set cards in the sequence from correctSequence
  const getText1 = () => {
    setSelectedCards1(correctSequence[0]); // Set the first correct card
  };

  const getText2 = () => {
    setSelectedCards2(correctSequence[1]); // Set the second correct card
  };

  const getText3 = () => {
    setSelectedCards3(correctSequence[2]); // Set the third correct card
  };

  const getText4 = () => {
    setSelectedCards4(correctSequence[3]); // Set the fourth correct card
    checkSequence(); // Check sequence after selecting the fourth card
  };

  // Reset game for retry
  const resetGame = () => {
    setSelectedCards1({});
    setSelectedCards2({});
    setSelectedCards3({});
    setSelectedCards4({});
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold text-blue-400">Initial Management</h2>

      <div className="mt-8 text-xl sm:text-2xl">
        <h2 className="text-center text-base sm:text-lg md:text-xl">Choose the correct sequence</h2>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mt-4 sm:mt-8">
          <div className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40" onClick={getText1}>
            <p className="text-xs sm:text-sm">{selectedCards1.text}</p>
          </div>
          <div className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40" onClick={getText2}>
            <p className="text-xs sm:text-sm">{selectedCards2.text}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mt-4 sm:mt-8">
          <div className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40" onClick={getText3}>
            <p className="text-xs sm:text-sm">{selectedCards3.text}</p>
          </div>
          <div className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40" onClick={getText4}>
            <p className="text-xs sm:text-sm">{selectedCards4.text}</p>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-4">Congratulations, correct sequence!</h2>
            <p className="text-green-600">Proceed to the next level.</p>
            <button
              onClick={onNext}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Wrong Alert */}
      {alertVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-600">Wrong!</h2>
            <p className="text-lg text-gray-700">You have selected the wrong sequence!</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => {
                setAlertVisible(false);
                resetGame();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level3;
