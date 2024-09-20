"use client"
import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([
    { id: 1,
      name : "Software Development",
      Teacher : "By Annie Leibovitz",
      startDate: "jan 1",
      endDate : "march 1",
      imageURL : "/landingPage/image_1.jpeg"
    },
    { id: 2,
      name : "Graphic Design",
      Teacher : "By Margaret Atwood",
      startDate: "march 3",
      endDate : "may 3",
      imageURL : "/landingPage/image_2.jpeg"
    },
    { id: 3,
      name : "Digital Marketing",
      Teacher : "By Chriss Voss",
      startDate: "may 6",
      endDate : "july 6",
      imageURL : "/landingPage/image_3.jpeg"
    },
    { id: 4,
      name : "Machine Learning",
      Teacher : "By Laurie Santos",
      startDate: "july 9",
      endDate : "sep 9",
      imageURL : "/landingPage/image_4.jpeg"
    },
    { id: 5,
      name : "Photograpy: A master Class",
      Teacher : "By Laurie Santos",
      startDate: "sep 11",
      endDate : "nov 11",
      imageURL : "/cources/photo.jpeg"
    },
    { id: 6,
      name : "Creative writting",
      Teacher : "By Laurie Santos",
      startDate: "nov 15",
      endDate : "jan 15",
      imageURL : "/cources/creativeWriting.jpeg"
    },
  ]);

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
