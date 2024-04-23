import { useEffect, useState } from "react";

export function CountUp(props){
  const end = props.end;
  const duration = props.duration;
  let step = 1;
  const [number, setNumber] = useState(props.start || 0);
  useEffect(()=>{
    const countdown = setInterval(() => {
      setNumber(number+(props.step?props.step:1));
    },duration/end*1000);
    if(number >= end){
      clearInterval(countdown);
    }
    return ()=>clearInterval(countdown);
  },[number])
  return(<>
    {number}
  </>);
}
export default CountUp