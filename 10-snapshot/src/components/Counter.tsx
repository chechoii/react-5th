import { useCallback, useState } from "react";


function slow(){
  console.log('작업 중....');
  
  let sum = 0;
  for(let i = 0; i < 100000000000000000000; i++){
    sum += i;
  }
  return sum;
}

function Counter() {

    let [number, setNumber] = useState(() => slow());

     const handleClick = useCallback(() => {
      setNumber(number + 1)
    },[number])
   
  return (
    <>
        <h1>{number}</h1>
        <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter