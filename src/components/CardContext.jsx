"use client"
import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
};
