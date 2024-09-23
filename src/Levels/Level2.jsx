import React, { useState, useEffect } from "react";
import CustomAlert from "./CustomAlert"; // Importing the CustomAlert component
import { useNavigate } from "react-router-dom";

const Level2 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();
  const [his, setHis] = useState({});
  const [exam, setExam] = useState({});
  const [hisTrigger, setHisTrigger] = useState(0);
  const [examTrigger, setExamTrigger] = useState(0);
  const [box1, setBox1] = useState({});
  const [box2, setBox2] = useState({});
  const [box3, setBox3] = useState({});
  const [box4, setBox4] = useState({});
  const [selectedseq, setSelectedseq] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup
  const [sc, setsc] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [abc, setAbc] = useState(false);
  const [result, SetResult] = useState([]);
  const [countdown, setCountdown] = useState(15);
  const [selectedOption, setSelectedOption] = useState([]); // H, N, or X

  const handleCompleteLevel2 = () => {
    // Mark level 2 as completed
    const completedLevels = { level1: true, level2: true };
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    console.log(box1, box2, box3, box4);
    // const updatedArray = [...selectedOption];
    // updatedArray.push(box1.code);
    // updatedArray.push(box2.code);
    // updatedArray.push(box3.code);
    // updatedArray.push(box4.code);
    // setSelectedOption(updatedArray);
    // Save the selected option (H, N, X) from Level 2
    const array = [];
    array.push(box1.code);
    array.push(box2.code);
    array.push(box3.code);
    array.push(box4.code);

    console.log(array);
    localStorage.setItem("level2Result", JSON.stringify(array));
    setCompletedLevels(completedLevels);
    // Navigate to level 3
    navigate("/level3");
  };

  const initialHistoryDeck = [
    {
      id: 1,
      text: "Painful Progressive Swelling",
      code: "H",
      type: "history",
    },
    {
      id: 2,
      text: "Continuous bleeding from bite site",
      code: "H",
      type: "history",
    },
    {
      id: 3,
      text: "Bleeding from the gum and other orifices",
      code: "H",
      type: "history",
    },
    { id: 4, text: "Epistaxis", code: "H", type: "history" },
    { id: 5, text: "Vomiting", code: "H", type: "history" },
    { id: 6, text: "Haematemesis", code: "H", type: "history" },
    { id: 7, text: "Haemoptysis", code: "H", type: "history" },
    { id: 8, text: "Acute abdominal Pain", code: "H", type: "history" },
    { id: 9, text: "Bleeding per rectum", code: "H", type: "history" },
    { id: 10, text: "Low back pain", code: "H", type: "history" },
    { id: 11, text: "Declining urine output", code: "H", type: "history" },
    {
      id: 12,
      text: "Difficulty in focusing with eyelids feeling heavy",
      code: "N",
      type: "history",
    },
    { id: 13, text: "Diplopia", code: "N", type: "history" },
    {
      id: 14,
      text: "Progressive swelling and local pain",
      code: "N",
      type: "history",
    },
    {
      id: 15,
      text: "Numbness around lips and mouth",
      code: "N",
      type: "history",
    },
    {
      id: 16,
      text: "Paralysis noted early in the morning",
      code: "N",
      type: "history",
    },
    { id: 17, text: "Dyspnea", code: "N", type: "history" },
    { id: 18, text: "Dysphonia", code: "N", type: "history" },
    { id: 19, text: "Dysphagia", code: "N", type: "history" },
    {
      id: 20,
      text: "Acute pain abdomen starting from early in the morning",
      code: "N",
      type: "history",
    },
    {
      id: 21,
      text: "Unexplained throat/chest/joint pain",
      code: "X",
      type: "history",
    },
    {
      id: 22,
      text: "Palpitation",
      code: "X",
      type: "history",
    },
    {
      id: 23,
      text: "Intense pain at bite site",
      code: "X",
      type: "history",
    },
    {
      id: 24,
      text: "Numbness and pain at bite site",
      code: "X",
      type: "history",
    },
    {
      id: 25,
      text: "Edema and Redness at bite site",
      code: "X",
      type: "history",
    },
    {
      id: 26,
      text: "Salivtion, sweating, Vomiting",
      code: "X",
      type: "history",
    },
  ];

  const initialExaminationDeck = [
    {
      id: 27,
      text: "Distinct bite mark with local swelling",
      code: "X",
      type: "exam",
    },
    {
      id: 28,
      text: "Local necrosis with rancid smell in a swollen limb with taught and shiny skin and skip lesions",
      code: "H",
      type: "exam",
    },
    {
      id: 29,
      text: "Significant Painful swelling involving the whole limb and extending onto the trunk",
      code: "H",
      type: "exam",
    },
    { id: 30, text: "Compartment Syndrome", code: "H", type: "exam" },
    {
      id: 31,
      text: "Tender enlargement of local lymph nodes",
      code: "H",
      type: "exam",
    },
    { id: 32, text: "Hypotension", code: "H", type: "exam" },
    {
      id: 33,
      text: "Petechiae, purpura and ecchymosis",
      code: "H",
      type: "exam",
    },
    { id: 34, text: "Asymmetrical pupil", code: "H", type: "exam" },
    {
      id: 35,
      text: "Parotid swelling, conjunctival edema, sub-conjunctival haemorrhage",
      code: "H",
      type: "exam",
    },
    { id: 36, text: "Ptosis", code: "N", type: "exam" },
    { id: 37, text: "Ophthalmoplegia", code: "N", type: "exam" },
    {
      id: 38,
      text: "Local necrosis and/or blistering",
      code: "N",
      type: "exam",
    },
    {
      id: 39,
      text: "Inability to swallow and aspiration of pooled secretions",
      code: "N",
      type: "exam",
    },
    {
      id: 40,
      text: "Cyanosis and altered sensorium",
      code: "N",
      type: "exam",
    },
    { id: 41, text: "Paradoxical respiration", code: "N", type: "exam" },
    { id: 42, text: "Dysarthria", code: "N", type: "exam" },
    {
      id: 43,
      text: "Ascending paralysis starting from early morning",
      code: "X",
      type: "exam",
    },
    {
      id: 44,
      text: "Unexplained respiratory distress in children in the presence of ptosis",
      code: "N",
      type: "exam",
    },
    {
      id: 45,
      text: "Sudden onset of Acute Flaccid Paralysis in a child",
      code: "N",
      type: "exam",
    },
    {
      id: 46,
      text: "Unexplained respiratory distress in children",
      code: "N",
      type: "exam",
    },
    {
      id: 47,
      text: "No swelling at bite site",
      code: "X",
      type: "exam",
    },
    {
      id: 48,
      text: "Mild swelling at bite site without progression",
      code: "X",
      type: "exam",
    },
    {
      id: 49,
      text: "Hypotension",
      code: "X",
      type: "exam",
    },
    {
      id: 50,
      text: "Tachypnoea",
      code: "X",
      type: "exam",
    },
    {
      id: 51,
      text: "Mydriasis",
      code: "X",
      type: "exam",
    },
    {
      id: 52,
      text: "Tremor",
      code: "X",
      type: "exam",
    },
  ];
  function getRandomhistoryObject() {
    const randomIndex = Math.floor(Math.random() * initialHistoryDeck.length);
    return initialHistoryDeck[randomIndex];
  }

  // const handleCodeSelect = (code) => {
  //   setSelectedCode(code);
  // };

  const historyfun = () => {
    setExamTrigger(0);
    setHisTrigger(1);
    // let temp = getRandomhistoryObject();
    setHis(getRandomhistoryObject());
  };

  function getRandomexamObject() {
    const randomIndex = Math.floor(
      Math.random() * initialExaminationDeck.length
    );
    return initialExaminationDeck[randomIndex];
  }

  const examfun = () => {
    setExamTrigger(1);
    setHisTrigger(0);
    setExam(getRandomexamObject());
  };
  const res1 = () => {
    if (
      (his && Object.keys(his).length > 0) ||
      (exam && Object.keys(exam).length > 0)
    ) {
      let a = 0;
      if (hisTrigger) {
        if (conditionforhis(his)) {
          setAbc(true);

          return;
        }
        setBox1(his);
        historyfun();
        a = 1;
      } else {
        if (conditionforexam(exam)) {
          setAbc(true);
          return;
        }
        setBox1(exam);
        a = 2;
      }
      setsc(sc + 1);
      if (sc >= 3) {
        if (a == 1) {
          checkrules(his, box2, box3, box4);
        } else {
          checkrules(exam, box2, box3, box4);
        }
      }
    }
  };
  const res2 = () => {
    if (
      (his && Object.keys(his).length > 0) ||
      (exam && Object.keys(exam).length > 0)
    ) {
      let a = 0;
      if (hisTrigger) {
        if (conditionforhis(his)) {
          setAbc(true);
          return;
        }
        setBox2(his);
        historyfun();
        a = 1;
      } else {
        if (conditionforexam(exam)) {
          setAbc(true);
          return;
        }
        setBox2(exam);
        a = 2;
      }
      setsc(sc + 1);
      if (sc >= 3) {
        if (a == 1) {
          checkrules(box1, his, box3, box4);
        } else {
          checkrules(box1, exam, box3, box4);
        }
      }
    }
  };
  const res3 = () => {
    if (
      (his && Object.keys(his).length > 0) ||
      (exam && Object.keys(exam).length > 0)
    ) {
      let a = 0;
      if (hisTrigger) {
        if (conditionforhis(his)) {
          setAbc(true);
          return;
        }
        setBox3(his);
        historyfun();
        a = 1;
      } else {
        if (conditionforexam(exam)) {
          setAbc(true);
          return;
        }
        setBox3(exam);
        a = 2;
      }
      setsc(sc + 1);
      if (sc >= 3) {
        if (a == 1) {
          checkrules(box1, box2, his, box4);
        } else {
          checkrules(box1, box2, exam, box4);
        }
      }
    }
  };
  const res4 = () => {
    if (
      (his && Object.keys(his).length > 0) ||
      (exam && Object.keys(exam).length > 0)
    ) {
      let a = 0;
      if (hisTrigger) {
        if (conditionforhis(his)) {
          setAbc(true);
          return;
        }
        setBox4(his);
        historyfun();
        a = 1;
      } else {
        if (conditionforexam(exam)) {
          setAbc(true);
          return;
        }
        setBox4(exam);
        a = 2;
      }
      setsc(sc + 1);
      if (sc >= 3) {
        if (a == 1) {
          checkrules(box1, box2, box3, his);
        } else {
          checkrules(box1, box2, box3, exam);
        }
      }
    }
  };
  const checkrules = (box1, box2, box3, box4) => {
    if (sc >= 3) {
      // console.log('ggg');
      if (
        box1.type == "history" &&
        box2.type == "history" &&
        box3.type == "history" &&
        box4.type == "history"
      ) {
        // console.log('fdff');
        setAbc(true);
        return;
      } else if (
        box1.type == "exam" &&
        box2.type == "exam" &&
        box3.type == "exam" &&
        box4.type == "exam"
      ) {
        setAbc(true);
      } else if (
        box1.code == "H" &&
        box2.code == "H" &&
        box3.code == "H" &&
        box4.code == "H"
      ) {
        // setAlertVisible(true);
        setShowSuccessPopup(true);
      } else if (
        box1.code == "N" &&
        box2.code == "N" &&
        box3.code == "N" &&
        box4.code == "N"
      ) {
        // setAlertVisible(true);
        setShowSuccessPopup(true);
      } else if (
        box1.code == "X" &&
        box2.code == "X" &&
        box3.code == "X" &&
        box4.code == "X"
      ) {
        // setAlertVisible(true);
        setShowSuccessPopup(true);
      } else {
        setAlertVisible(true);
      }
    }
  };
  const conditionforhis = (curr) => {
    //console.log(curr);
    if (
      box1?.type == "history" &&
      box2?.type == "history" &&
      box3?.type == "history" &&
      curr?.type == "history"
    ) {
      return true;
    } else if (
      box1?.type == "history" &&
      box2?.type == "history" &&
      box4?.type == "history" &&
      curr?.type == "history"
    ) {
      return true;
    } else if (
      box1?.type == "history" &&
      box3?.type == "history" &&
      box4?.type == "history" &&
      curr?.type == "history"
    ) {
      return true;
    } else if (
      box3?.type == "history" &&
      box2?.type == "history" &&
      box4?.type == "history" &&
      curr?.type == "history"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const conditionforexam = (curr) => {
    // console.log(curr);
    if (
      box1?.type == "exam" &&
      box2?.type == "exam" &&
      box3?.type == "exam" &&
      curr.type == "exam"
    ) {
      return true;
    } else if (
      box1?.type == "exam" &&
      box2?.type == "exam" &&
      box4?.type == "exam" &&
      curr.type == "exam"
    ) {
      return true;
    } else if (
      box1?.type == "exam" &&
      box3?.type == "exam" &&
      box4?.type == "exam" &&
      curr.type == "exam"
    ) {
      return true;
    } else if (
      box3?.type == "exam" &&
      box2?.type == "exam" &&
      box4?.type == "exam" &&
      curr.type == "exam"
    ) {
      return true;
    } else {
      return false;
    }
  };

  // const closeAlert = () => {
  //   setAlertMessage("");
  // };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel2();
  };

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

  const codeSelection = () => {
    if (
      (box1.code == "H" &&
        box2.code == "H" &&
        box3.code == "H" &&
        box4.code == "H") ||
      (box1.code == "N" &&
        box2.code == "N" &&
        box3.code == "N" &&
        box4.code == "N")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const resetGame = () => {
    // Reset the boxes and card selections
    setBox1({});
    setBox2({});
    setBox3({});
    setBox4({});
    
    // Reset the countdown timer
    setCountdown(15);
  
    // Reshuffle the decks (if needed) or just clear selections
    setHis({});
    setExam({});
    
    // Reset other state variables
    setsc(0); // Reset selected count
    setAbc(false);
    setAlertVisible(false);
    setSelectedOption([]);
    
    // Optionally reset the trigger states
    setHisTrigger(0);
    setExamTrigger(0);
    
    // Optionally reset other states depending on how the game flow should restart
    // e.g. setCompletedLevels, showSuccessPopup, etc.
    
    console.log("Game has been reset!");
  };
  
  

  return (
    <div className="w-full h-auto md:flex flex-col items-center">
      <div>
        {/* <CustomAlert message={alertMessage} onClose={closeAlert} /> */}
        <div className="w-full h-auto md:flex justify-center items-center">
          {/* history Section */}
          <div className="w-full h-80 m-7  flex flex-col items-center">
            <div className="text-blue-600 font-bold text-2xl">History</div>
            <div
              className="relative w-60 h-72 cursor-pointer"
              onClick={historyfun}
            >
              <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
              <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
              <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
              <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
              <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
                <p className="text-center text-xl">{his.text}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-80 m-7 flex flex-col items-center">
            <div className="text-blue-600 font-bold text-2xl mt-4">
              Examination
            </div>
            <div
              className="relative w-60 h-72 cursor-pointer"
              onClick={examfun}
            >
              <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
              <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
              <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
              <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
              <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
                <p className="text-center text-xl">{exam.text}</p>
              </div>
            </div>
          </div>
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
            onClick={res1}
          >
            <p className="text-md text-center">{box1.text}</p>
          </div>
          <div
            className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
            onClick={res2}
          >
            <p className="text-md text-center">{box2.text}</p>
          </div>

          <div
            className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
            onClick={res3}
          >
            <p className="text-md text-center">{box3.text}</p>
          </div>
          <div
            className="border-2 border-blue-400 w-60 h-32 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
            onClick={res4}
          >
            <p className="text-md text-center">{box4.text}</p>
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-4">
              Correct!!
            </h2>
            {/* <p className="text-green-600">Go to the next level.</p> */}
            <button
              onClick={handleSuccessClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Proceed to the next level
            </button>
          </div>
        </div>
      )}

      {/* Wrong Alert */}
      {alertVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-600">Wrong!</h2>
            <p className="text-lg text-gray-700">
              You have selected the wrong sequence!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => {
                resetGame();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {abc && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-600">Alert!</h2>
            <p className="text-lg">Maximum 3 card can be seleted from a deck</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => {
                setAbc(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level2;
