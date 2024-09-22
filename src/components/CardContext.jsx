"use client"
import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const[isEnrolled, setEnrolled] = useState(false)
  const [cards, setCards] = useState([
    { id: 1,
      name : "Software Development",
      Teacher : "By Annie Leibovitz",
      startDate: "jan 1",
      endDate : "march 1",
      imageURL : "/landingPage/image_1.jpeg",
      enrolled: false
    },
    { id: 2,
      name : "Graphic Design",
      Teacher : "By Margaret Atwood",
      startDate: "march 3",
      endDate : "may 3",
      imageURL : "/landingPage/image_2.jpeg",
      enrolled: false
    },
    { id: 3,
      name : "Digital Marketing",
      Teacher : "By Chriss Voss",
      startDate: "may 6",
      endDate : "july 6",
      imageURL : "/landingPage/image_3.jpeg",
      enrolled: false
    },
    { id: 4,
      name : "Machine Learning",
      Teacher : "By Laurie Santos",
      startDate: "july 9",
      endDate : "sep 9",
      imageURL : "/landingPage/image_4.jpeg",
      enrolled: false
    },
    { id: 5,
      name : "Photograpy: A master Class",
      Teacher : "By James Nick",
      startDate: "sep 11",
      endDate : "nov 11",
      imageURL : "/cources/photo.jpeg",
      enrolled: false

    },
    { id: 6,
      name : "Creative writting",
      Teacher : "By Robert Downie",
      startDate: "nov 15",
      endDate : "jan 15",
      imageURL : "/cources/creativeWriting.jpeg",
      enrolled: false
    },
    { id: 7,
      name : "The Art of Negotiation",
      Teacher : "By David Malan",
      startDate: "jan 18",
      endDate : "Mar 18",
      imageURL : "/cources/negotiation.jpeg",
      enrolled: false
    },
    { id: 8,
      name : "Investing for Beginners",
      Teacher : "By Warren Buffet",
      startDate: "Mar 21",
      endDate : "May 21",
      imageURL : "/cources/investing.jpeg",
      enrolled: false
    },
    { id: 9,
      name : "The Science Of Happiness",
      Teacher : "By Jennifer Lawrence",
      startDate: "Mar 25",
      endDate : "Jun 25",
      imageURL : "/cources/happiness.jpeg",
      enrolled: false
    },
    { id: 10,
      name : "Public Speaking Bootcamp",
      Teacher : "By Simon Sinek",
      startDate: "Jun 28",
      endDate : "Sep 28",
      imageURL : "/cources/speaking.jpeg",
      enrolled: false
    },
    { id: 11,
      name : "Intro to Product Design",
      Teacher : "By Julie Zhuo",
      startDate: "Nov 1",
      endDate : "Feb 1",
      imageURL : "/cources/production.jpeg",
      enrolled: false
    },
    { id: 12,
      name : "Japanese Cuisine",
      Teacher : "By Masaharu Morimoto",
      startDate: "Feb 5",
      endDate : "May 5",
      imageURL : "/cources/cusine.jpeg",
      enrolled: false
    },
    { id: 13,
      name : "DIY Home Renovation",
      Teacher : "By Chip & Joanna Gaines",
      startDate: "May 8",
      endDate : "Aug 8",
      imageURL : "/cources/renovation.jpeg",
      enrolled: false
    },
    { id: 14,
      name : "Fitness Foundation",
      Teacher : "By Joe Wicks",
      startDate: "Aug 12",
      endDate : "Nov 12",
      imageURL : "/cources/fitness.jpeg",
      enrolled: false
    },
    { id: 15,
      name : "Cyber Security Fundamentals",
      Teacher : "Alan Thomas",
      startDate: "Nov 15",
      endDate : "Fab 15",
      imageURL : "/cources/cyber.jpeg",
      enrolled: false
    },
  ]);

  const [currentCard, setCurrentCard] = useState(null); 

  const editCard = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setCurrentCard(null); // Clear current card after editing
  };

  const selectCardForEdit = (id) => {
    const card = cards.find((c) => c.id === id);
    setCurrentCard(card);
  };

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
    document.getElementById("my_modal_3").close();
  };

  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };



  return (
    <CardContext.Provider value={{ cards, addCard, removeCard, editCard, currentCard,
      selectCardForEdit, setCards}}>
      {children}
    </CardContext.Provider>
  );
};
