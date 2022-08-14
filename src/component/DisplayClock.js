import React from 'react'
import './DisplayClock.css'

export default function DisplayClock(props) {
    const months=['Jan','Feb','Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days=['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let {hours,minutes,seconds,month,day,year,date} = props
    if(hours<10)hours="0"+hours
    if(minutes<10)minutes="0"+minutes
    if(seconds<10)seconds="0"+seconds
    if(date<10)date="0"+date
    month=months[month]
    day=days[day]
    const style={
        backgroundImage:`conic-gradient(from ${360*((props.seconds*1000+props.milli)/60000)}deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),crimson)`
    }
  return (
    <div className='clock-before' style={style}>
        <div className='clock'>
            <p className='day'>{day}</p>
            <p className='date'>{month} {date}, {year}</p>
            <div className='time'>
                <h1>{hours}</h1>
                <div className='colon'>
                    <div></div>
                    <div></div>
                </div>
                <h1>{minutes}</h1>
                <div className='colon'>
                    <div></div>
                    <div></div>
                </div>
                <h1>{seconds}</h1>
            </div>
        </div>
    </div>
    
  )
}
