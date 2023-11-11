import { useEffect } from "react";


export const  OnKeyPress= (callback, targetkey) => {
  useEffect (()=>{
const keypressHandler = (event) =>{
    if (event.key === targetkey){
        callback();
    }
}
window.addEventListener("keydown", keypressHandler);
return () =>{
    window.removeEventListener("keydown",keypressHandler);
}
  },[callback,targetkey]);
}