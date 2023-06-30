import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Phase } from "@/pages/interview";

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
  isStarted: Phase;
  onTimerEnded?: () => void;
}) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (isStarted != Phase.Interview) return;

    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
      if (time <= 0) {
        if (onTimerEnded) onTimerEnded();
      }
      clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [time, isStarted]);

  return (
    <TimerContainer>
      <span>면접 시간</span>
      <div>
        {(~~(time / 60)).toString().padStart(2, "0")} :{" "}
        {(time % 60).toString().padStart(2, "0")}
      </div>
    </TimerContainer>
  );
}

export default Timer;
