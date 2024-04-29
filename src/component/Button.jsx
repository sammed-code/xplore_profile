import {
  Clear,
  Done,
  LiveTvRounded,
  Login,
  Logout,
  PlayArrowRounded,
} from "@mui/icons-material";
import React from "react";

function Button(props) {
  const { label, cName, type } = props;

  const icons = {
    login: <Login />,
    start: <PlayArrowRounded />,
    submit: <Done />,
    reset: <Clear />,
    logout: <Logout />,
    liveDemo: <LiveTvRounded />,
  };

  return (
    <>
      <button className={cName}>
        <span className="label px-1">{label}</span>
        {icons[type]}
      </button>
    </>
  );
}

export default Button;
