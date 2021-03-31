import React from "react";
import classNames from "../utils/class-names";



// Component to render the play/pause/stop buttons.
function Controls(props) {
    const {isTimerRunning, playPause, handleStop, session} = props;

    return (
        <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={handleStop}
              disable={session}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
    )

}

export default Controls;