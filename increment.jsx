import React, {useState} from "react";
function Increment(){

    const [number, setNumber] = useState(0);
function incrimentFunc(){
    setNumber(number+1);
}
function decrementFunc(){
    if(number!==0){
    setNumber(number-1);
    }
    else if(number===0 || number<0){
        setNumber(0);
    }
}
function resetFunc(){
    setNumber(0);
}


return(
    <div className="container">
    <p className="para">{number}</p>
    <div className="buttons">
   <button onClick={incrimentFunc} className="incriBtn">Incriment</button> 
   <button onClick={resetFunc} className="resetBtn">Reset</button> 
   <button onClick={decrementFunc} className="decriBtn">Decrement</button> 
   </div>
   </div>
  
)
}
export default Increment