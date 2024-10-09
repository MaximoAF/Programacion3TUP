import { useState } from "react";

export const ComponentCounter = () => {
  const [counter, setCouter] = useState<number>(0)

  const incrementarCounter = ()=>{
    setCouter((prev)=>prev+1)
  }
  const decrementarCounter = ()=>{
    if (counter > 0) {
      setCouter((prev)=>prev-1)
    }
  }


  return (
    <div>
      <h2> Valor de counter: {counter}</h2>

      <button onClick={incrementarCounter}>incrementar</button>
      <button onClick={decrementarCounter}>Decrementar</button>
    </div>
  );
};
