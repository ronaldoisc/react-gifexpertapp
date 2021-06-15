import React, { Fragment} from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

//   const [images, setimages] = useState([])


  const {data:images,loanding}= useFetchGifs(category);
 
    

    return (
     <Fragment>
          <h3 className="animate__animated animate__fadeIn">{category}</h3>
          {loanding && <p className="animate__animated animate__flash">Cargando</p>}
        {
           
        <div className="card-grid">
          
               {
                   images.map((img) => {
                     return  <GifGridItem key={img.id} {...img}/>
                   })
               }
          
           
        </div> 
        }

     </Fragment>
           
    )
}
