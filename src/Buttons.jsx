import React, { useContext } from "react";
import PixabayContext from "./Context/PixabayContext";

const Buttons = () => {
  const { fetchImageCategary,setQuary } = useContext(PixabayContext);
  return (
    <>
      <div className="text-center  m-4">
        <button
          onClick={() => fetchImageCategary("fashion")}
          type="button"
          className="btn btn-outline-primary w-30"
        >
          Fashion
        </button>
        <button
          onClick={() => fetchImageCategary("science")}
          type="button"
          className="btn btn-outline-secondary mx-4"
        >
          Science
        </button>
        <button
          onClick={() => fetchImageCategary(" education")}
          type="button"
          className="btn btn-outline-success mx-4"
        >
          Education
        </button>
        <button
          onClick={() => fetchImageCategary("health")}
          type="button"
          className="btn btn-outline-danger mx-4"
        >
          Health
        </button>
        <button
          onClick={() => fetchImageCategary("places")}
          type="button"
          className="btn btn-outline-warning mx-4"
        >
          Places
        </button>
        <button
          onClick={() => fetchImageCategary("animals")}
          type="button"
          className="btn btn-outline-info mx-4"
        >
          Animals
        </button>
        <button
          onClick={() => fetchImageCategary("food")}
          type="button"
          className="btn btn-outline-light mx-4"
        >
          Food
        </button>
        <button
          onClick={() => fetchImageCategary("sports")}
          type="button"
          className="btn btn-outline-warning mx-4"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImageCategary("travel")}
          type="button"
          className="btn btn-outline-primary mx-4"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImageCategary("people")}
          type="button"
          className="btn btn-outline-info mx-4"
        >
          People
        </button>
        <button
          onClick={() => fetchImageCategary("industry")}
          type="button"
          className="btn btn-outline-warning mx-4"
        >
          Industary
        </button>
      </div>
      <div className="button">
        <input
          onChange={(e)=>setQuary(e.target.value)}
          type="text"
          name="search"
          placeholder="Search background image "
        />
       
      </div>
    </>
  );
};

export default Buttons;
