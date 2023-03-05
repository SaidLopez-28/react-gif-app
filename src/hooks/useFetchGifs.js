import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
    // custom hooks
export const useFetchGifs = (category) => { 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const getImgs = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    } 
    useEffect( ()  => {
         getImgs();
    }, []); 

 
  return  {
    // se puede dejar solo images por ecmascript6 isLoading: isLoading
    images: images,
    isLoading
  }
}
