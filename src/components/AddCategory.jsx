import { useState } from "react";
// funcional component "rafc" 
// form seria el formulario 
// "on" es un evento 
export const AddCategory = ({onNewCategory}) => {

     const [inputValue, setinputValue] = useState(); // arreglos

     const onInputChange = ({target}) => { 
          setinputValue(target.value);  
     }
     const onSubmit = (event) => {
          event.preventDefault();

          if ( inputValue.trim().length <=1 ) return;

          //setcategories(categories => [inputValue, ...categories]); // insertar
          onNewCategory(inputValue.trim()); // trim() eliminar los espacios en blanco 
          setinputValue('');
     }
  return (
     
     <form onSubmit={onSubmit }> 
          <input
               type='text'
               placeholder="Buscar gifs"
               value={inputValue}
               onChange={onInputChange}/>
     </form>
  )
}
