import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
 
const Btnincdec = () => {    
    const [value, setvalue] = useState(1);

    const increment = () => {
        setvalue(value + 1);
    }
    const decrement = () => {
        if(value > 0) {
        setvalue(value - 1);
        }
        else {
            setvalue(0);
        }
    }
    const data = () => {
        alert('test3');
    }

    return ( 
 <div style={{ display: 'block', width: 700, padding: 30 }}>
     <button type="button" onClick={increment}>+</button>
     <button type="button">{value}</button>
     <button type="button" onClick={decrement}>-</button>
     
   </div>
    )
}

export default Btnincdec;