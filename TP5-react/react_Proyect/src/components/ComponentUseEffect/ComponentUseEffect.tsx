import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    return ()=>{
      console.log('Component dismountedS')
    }
  }, []);
  useEffect(() => {
    console.log(state ? "es true" : "es false");
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle state</button>
    </div>
  );
};
