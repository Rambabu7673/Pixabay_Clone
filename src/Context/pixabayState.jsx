import React, {  useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";


const PixabayState = (props) => {
   
  const [imageData, setImageData] = useState([]);
  const [quary, setQuary] = useState('london');


  const api_key = "52485010-be4a456d8db8e7291a7928c62";
  useEffect(() => {
    

    const fetchData = async () => {
      const api =await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${quary}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json()
      setImageData(data.hits)
      console.log(data)
    };
    fetchData();
  }, [quary]);

  const fetchImageCategary = async (cat) => {

    
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  }
 
  return (
    <PixabayContext.Provider value={{imageData,fetchImageCategary,setQuary}}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
