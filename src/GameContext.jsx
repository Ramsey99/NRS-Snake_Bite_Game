import React, { createContext, useState } from "react";

// Create context
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [level2Result, setLevel2Result] = useState(null);

  return (
    <GameContext.Provider value={{ level2Result, setLevel2Result }}>
      {children}
    </GameContext.Provider>
  );
};
