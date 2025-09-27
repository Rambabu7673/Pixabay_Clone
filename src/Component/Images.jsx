import React, { useContext } from "react";
import PixabayContext from "../Context/PixabayContext";

const Images = () => {
  const { imageData } = useContext(PixabayContext);
  return (
    <>
      <div className="flex">
        {imageData.map((image) => <div key={image.id}>
          <div className="iteam">
            <img src={image.
              largeImageURL} alt="Picture" /> 
            
          </div>
            
        </div> )}
        
      </div> 
    </>
    
  );
};

export default Images;
