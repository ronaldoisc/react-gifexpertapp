import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export default function useFetchGifs(category) {
    const [state, setstate] = useState({
        data:[],
        loanding:true
    })
    useEffect(() => {
       getGifs(category).then(imgs=>{
         setstate({
            data:imgs,
            loanding:false
         })
       });
    }, [category])
   
    return state;
}
