import Webcam from "react-webcam";
import S from "@/pages/interview.styled";
import Timer from "@/components/pages/interview/Timer";
import React, { useEffect, useRef, useState } from "react";
import VideoRecorder from "@/core/VideoRecorder";

enum Phase {
  Idle,
  Ready,
  Interview,
  End,
}

function DefaultPlaceholder() {
  return <h3>AI 면접 준비가 되시면 아래 시작을 누르세요.</h3>;
}
function ReadyPlaceholder({ onCountOver }: { onCountOver?: () => void }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((prev) => {
        const newValue = prev - 1;
        if (newValue == 0) {
          if (onCountOver) onCountOver();
          clearInterval(id);
        }
        return newValue;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "24px",
          color: "white",
          fontSize: "100px",
          fontWeight: 500,
        }}
      >
        {countdown}
      </h1>
      <h3>곧 AI면접이 시작되니 준비해주세요!</h3>
    </div>
  );
}
function EndPlaceholder() {
  return (
    <h3 style={{ color: "white" }}>첫 번째 질문 면접이 종료되었습니다.</h3>
  );
}
export default function InterviewPage() {
  const [phase, setPhase] = useState<Phase>(Phase.Idle);
  const videoRecorder = useRef<VideoRecorder>(new VideoRecorder());

  useEffect(() => {
    videoRecorder.current.video = document.getElementById(
      "webcam_video"
    ) as HTMLVideoElement;

    videoRecorder.current.startVideo();
  }, []);

  const handleReady = () => {
    videoRecorder.current.startRecorder();
    setPhase(Phase.Ready);
  };

  const handleEnd = () => {
    videoRecorder.current.stopRecorder();
    setPhase(Phase.End);
  };

  return (
    <S.PageContainer>
      <S.InterviewContainer>
        {(() => {
          switch (phase) {
            case Phase.Idle:
              return <DefaultPlaceholder />;
            case Phase.Ready:
              return (
                <ReadyPlaceholder
                  onCountOver={() => setPhase(Phase.Interview)}
                />
              );
            case Phase.End:
              return <EndPlaceholder />;
          }
        })()}
        <S.WebcamContainer>
          <Webcam id="webcam_video" />
          <p>나</p>
        </S.WebcamContainer>
      </S.InterviewContainer>

      {phase == Phase.Idle ? (
        <S.StartButton onClick={handleReady}>시작</S.StartButton>
      ) : (
        <S.StopButton onClick={handleEnd}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "4px",
              backgroundColor: "white",
              marginLeft: "3px",
            }}
          />
        </S.StopButton>
      )}
      <Timer isStarted={phase == Phase.Interview} onTimerEnded={handleEnd} />
    </S.PageContainer>
  );
}
