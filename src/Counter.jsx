import React,{useEffect,useState} from "react";

const Counter=()=>{
    const [number,setNumber]=useState(0);
    const[text,setText]=useState('Hello')

    useEffect(()=>{ console.log('Call from global console'); 
    setText(Math.random());
},[number]);
    return (<div>
        
        {number}
        NEW APP
        {text}
        <button onClick={()=>setNumber(Math.random())}>Update Number</button>
        <button onClick={()=>setText(Math.random())}>Update Text</button>
        </div>);
}

export default Counter;
