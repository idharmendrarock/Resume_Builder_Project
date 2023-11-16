import { useEffect } from "react";

// we are using windows property for key status access********


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