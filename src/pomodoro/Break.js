import React from "react";
import { secondsToDuration } from "../utils/duration";


// Component to render the break component at top of page.
function Break(props) {
    const {handleBreakIncrease, handleBreakDecrease, session, breakDuration} = props;



    return (
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {secondsToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  disable={session ? true : false}
                  onClick={handleBreakDecrease}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  disable={session ? true : false}
                  onClick={handleBreakIncrease}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Break;