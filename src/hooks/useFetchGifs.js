import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

     const [images, setimages] = useState([]); 
     const [isLoading, setIsLoading] = useState(true);
     
     const getImages = async() => {
          const newImages = await getGifs( category ); 
          setimages(newImages); 
          setIsLoading(false);
     }

     useEffect( () => { // sirve para disparar efectos secundarios, para que no que se ejecute más de una vez.
          getImages();
     }, []);


  return {
          images,
          isLoading
  }
}
