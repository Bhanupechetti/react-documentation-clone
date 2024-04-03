import { useState } from "react";
function Counter() {
    let [Counter,setCounter] = useState(0);

        const add = ()=>{
            setCounter(Counter++);
        }

        const sub = () =>{
                setCounter(Counter--);  
        }
   return(
           <div className="about">
            <Heroback/>
            <h1 style={{color:"white"}}>Counter</h1>
            <h2 style={{color:"white"}}>{Counter}</h2>
            <button onClick={add} style={{width:"20px",height:"20px"}}>+</button>
            <button  onClick={sub} style={{width:"20px",height:"20px"}}>-</button>
           </div>
   ); 
}
export default Counter;