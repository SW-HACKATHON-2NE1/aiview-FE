import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const TimerContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  "& > span": {
    margin: 0,
    color: theme.color.G600,
    fontSize: "18px",
    fontWeight: 500,
  },
  "& > div": {
    color: theme.color.red,
    fontSize: 24,
    fontWeight: "700",
  },
}));

function Timer({
  isStarted,
  onTimerEnded,
}: {
  isStarted: boolean;
  onTimerEnded?: () => void;
}) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (!isStarted) return;

    const id = setInterval(() => {
      setTime((prevTime) => {
        if (!isStarted) return prevTime;
        const newValue = prevTime - 1;
        if (newValue <= 0) {
          if (onTimerEnded) onTimerEnded();
          clearInterval(id);
        }
        return newValue;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isStarted]);

  return (
    <TimerContainer>
      <span>면접 시간</span>
      <div>
        {(time / 60).toFixed().padStart(2, "0")} :{" "}
        {(time % 60).toString().padStart(2, "0")}
      </div>
    </TimerContainer>
  );
}

export default Timer;
