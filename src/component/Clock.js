import React,{useState,useEffect} from 'react'
import DisplayClock from './DisplayClock'

export default function Clock() {
    const [now, setnow] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setnow(new Date());
        }, 100);
    }, []);
  return (
    <>
     <DisplayClock
        hours={now.getHours()}
        minutes={now.getMinutes()}
        seconds={now.getSeconds()}
        month={now.getMonth()}
        day={now.getDay()}
        year={now.getFullYear()}
        date={now.getDate()}
        milli={now.getMilliseconds()}
        /> 
    </>
  )
}
