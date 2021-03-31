import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Focus from "./Focus";
import Break from "./Break";
import Timer from "./Timer";
import Controls from "./Controls";

function Pomodoro() {
  
  // Initial data for my state variable.
  const initialData = {
    focusDuration: 1500,
    breakDuration: 300,
    remaining: 1500,
    focus: false,
    break: false,
    session: false
  }



  // Where I store all data being held in state.
  const [data, setData] = useState({...initialData});
  const [isTimerRunning, setIsTimerRunning] = useState(false);


  // Implements what should happen when the timer is running.
  useInterval( () => {
     setData({...data, remaining: data.remaining - 1});
     if(data.remaining === 0 && data.focus === true) {
      new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      setData({...data, remaining: data.breakDuration, focus: false, break: true})
     } 
     else if(data.remaining === 0 && data.break === true){
      new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      setData({...data, remaining: data.focusDuration, focus: true, break: false})
     }
    },
    isTimerRunning ? 1000 : null
  );

  // All button handlers for the focus/break toggles.
  const handleFocusIncrease = () => {
    if(data.focusDuration < 3600) setData({...data, focusDuration: data.focusDuration + 300})
  }

  const handleFocusDecrease = () => {
    if(data.focusDuration > 300) setData({...data, focusDuration: data.focusDuration - 300}) 
  }

  const handleBreakIncrease = () => {
     if(data.breakDuration < 900) setData({...data, breakDuration: data.breakDuration + 60})
  }

  const handleBreakDecrease = () => {
    if(data.breakDuration > 60) setData({...data, breakDuration: data.breakDuration - 60})
  }

  // Handler for the play and pause controls.
  function playPause() {
    if(!(data.focus || data.break)) setData({...data, remaining: data.focusDuration, focus: true, session: true})
    setIsTimerRunning((prevState) => !prevState);
  }
  // Handler for the stop button.
  const handleStop = () => {
    if(isTimerRunning) setIsTimerRunning((prevState) => !prevState);
    setData({...data, focus: false, break: false, session: false})
  }

  // JSX parent component for my other four components.
  // Is returned and rendered in through the App component into the Index component.
  return (
    <div className="pomodoro">
      <div className="row">
        <Focus isTimerRunning={isTimerRunning} focusDuration={data.focusDuration} session={data.session} 
          handleFocusIncrease={handleFocusIncrease} handleFocusDecrease={handleFocusDecrease} />
        <Break isTimerRunning={isTimerRunning} breakDuration={data.breakDuration} session={data.session}
        handleBreakIncrease={handleBreakIncrease} handleBreakDecrease={handleBreakDecrease}/>
      </div>
        <Controls isTimerRunning={isTimerRunning} session={data.session} playPause={playPause} handleStop={handleStop}/>
        <Timer isTimerRunning={isTimerRunning} focusDuration={data.focusDuration} breakDuration={data.breakDuration}
          remaining={data.remaining} session={data.session} focus={data.focus}/>
    </div>
  );
}

export default Pomodoro;
