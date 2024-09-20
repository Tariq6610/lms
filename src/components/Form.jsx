"use client"
import { useCardContext } from "./CardContext";
import { useEffect, useState } from "react";


const CardForm = () => {
    const { addCard, cards } = useCardContext()
    const [name, setName] = useState('');
    const [Teacher, setTeacher] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [imageFile, setImageFile] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newCard = {
        id: Date.now(),
        name,
        Teacher,
        startDate,
        endDate,
        imageURL : URL.createObjectURL(imageFile)
      };
      addCard(newCard);
      setName('');
      setTeacher('');
      setStartDate('');
      setEndDate('')
      setImageFile(null)
      
    };

    // useEffect(()=>{
    //   console.log(cards)
    // },[cards])
  
    return (
      <>
          <form className="px-10" method="dialog" onSubmit={handleSubmit}>
          <input
            className="w-full input input-bordered mb-4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Cource"
            required
          />
          <input
            className="input w-full input-bordered mb-4"
            type="text"
            value={Teacher}
            onChange={(e) => setTeacher(e.target.value)}
            placeholder="Teacher"
            required
          />
          <input
            className="input w-full input-bordered mb-4"
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
            required
          />
          <input
            className="input w-full input-bordered mb-4"
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End Date"
            required
          />
          <input
            className="input w-full input-bordered mb-4"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            placeholder="End Date"
            required
          />
          <div>
            <button className="btn" type="submit">
              Add Card
            </button>
          </div>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
          </button>
        </form>


       
      </>
    );
  };

  export default CardForm;