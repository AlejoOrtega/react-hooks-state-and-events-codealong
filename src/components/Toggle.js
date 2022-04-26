import React, {useState} from "react";

function Toggle() {
  const [state, setState] = useState('OFF')

  const color = state==='ON' ? 'red' : 'white';

  const onClick = () => {
    if(state === 'OFF'){
      setState('ON')
    }else{
      setState('OFF')
    }
    /*setState((state)=>{
      if(state === 'OFF'){
        setState('ON')
      }else{
        setState('OFF')
      }
    })*/
  }

  return <button 
            style={{background: color}}
            onClick={onClick}
            >{state}</button>;
}

export default Toggle;
