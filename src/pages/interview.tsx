import Webcam from "react-webcam";
import S from "@/pages/interview.styled";
import Timer from "@/components/pages/interview/Timer";
import React, { useEffect, useRef, useState } from "react";
import VideoRecorder from "@/core/VideoRecorder";
import { useRouter } from "next/router";
import useSWR from "swr";
import CSR from "@/components/CSR";
import axios from "axios";

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
function InterviewPlaceholder({ question }: { question: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#1A1A1A",
        color: "white",
        fontSize: "24px",
        fontWeight: 500,
        border: "1px solid #333",
        borderRadius: "50px",
        padding: "16px 32px",
        marginTop: "240px",
      }}
    >
      <h3>{question}</h3>
    </div>
  );
}
function EndPlaceholder() {
  return (
    <h3 style={{ color: "white" }}>첫 번째 질문 면접이 종료되었습니다.</h3>
  );
}

interface InterviewProps {
  question: FirstQuestionAPIResponse;
}
function Interview({ question }: InterviewProps) {
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

  const handleEnd = async () => {
    videoRecorder.current.stopRecorder();

    const token = localStorage.getItem("token") as string;

    const { uploadUrl } = await fetch(
      `https://aiview.shop/presigned-url/upload/${question.questionId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    ).then<PreSignedUploadAPIResponse>((res) => res.json());
    console.log(uploadUrl);
    const blob = new Blob(videoRecorder.current.chunks, { type: "video/webm" });
    const formdata = new FormData();
    formdata.append("video", blob, "video.webm");
    await fetch(uploadUrl, {
      method: "PUT",
      body: formdata,
      headers: {
        "Content-Type": "video/webm",
      },
    }).catch((e) => {});

    await fetch(`https://aiview.shop/transcription/${question.questionId}`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        Authorization: token,
      },
    });

    const data = await fetch(`https://aiview.shop/gpt/${question.questionId}`, {
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

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
            case Phase.Interview:
              return <InterviewPlaceholder question={question.content} />;
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

function InterviewPageBody() {
  const router = useRouter();
  const subjectid = router.query["subjectid"];
  if (!subjectid) return <>loading...</>;

  const firstQuestion = useSWR<FirstQuestionAPIResponse>([
    `https://aiview.shop/question/first/${subjectid}`,
    typeof localStorage !== undefined ? localStorage.getItem("token") : "",
  ]);
  if (firstQuestion.isLoading || !firstQuestion.data) return <>loading...</>;

  return <Interview question={firstQuestion.data} />;
}
export default function InterviewPage() {
  return (
    <CSR>
      <InterviewPageBody />
    </CSR>
  );
}
