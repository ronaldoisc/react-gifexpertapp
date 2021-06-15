import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GifExpertApp=()=>{

   const [categories, setcategories] = useState(['Goku']);
  return (

    <>
       <h2>GifExpertApp</h2>
       <AddCategory setcategories={setcategories} />
       <hr></hr>
    
   
     
        {
          categories.map(category => (
            <GifGrid key={category} category={category} />
         ))
        }
     
    </>
  );
 
};
export default GifExpertApp;