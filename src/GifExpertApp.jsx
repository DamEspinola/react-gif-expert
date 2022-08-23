import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

     const [categories, setcategories] = useState(['One Punch']); // areglos 
     
     const onAddCategory = (newCategory) => {
          if (categories.includes(newCategory)) return; // si ya esta para que no anhada
          setcategories([newCategory, ...categories]); // a... para copiar y anhadir un nuevo listado
     }

     return (
        <>
     {/*Titulo*/}
          <h1> GifExpertApp </h1>

      {/*inpunt*/}
     <AddCategory 
          onNewCategory={(value)=> onAddCategory(value)}
     />
      
      {/*istado de Gif */}
      
      {
          categories.map( (category) => (
               <GifGrid 
                    key={category}
                    category={category} />    
          ))
     
      }
      

        </>
     )
}