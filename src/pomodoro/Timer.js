import React from "react";
import { secondsToDuration } from "../utils/duration";

// Component to render the timer once user hits the play button.
function Timer(props) {
    const {focusDuration, breakDuration, session, remaining, focus} = props;
    if(!session) return null;
    let ariaValue= 0;

    focus ? ariaValue = (focusDuration-remaining)/focusDuration*100 : ariaValue = (breakDuration-remaining)/breakDuration*100;

    

return (
    <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            {focus ? <h2 data-testid="session-title">Focusing for {secondsToDuration(focusDuration)} minutes</h2> :
            <h2 data-testid="session-title">On Break for {secondsToDuration(breakDuration)} minutes </h2>}
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(remaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaValue.toString()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaValue}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )

}

export default Timer;