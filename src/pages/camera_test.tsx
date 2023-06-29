import React, { useEffect, useRef, useState } from "react";

export default function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder>();
  const chunksRef = useRef<Blob[]>([]);
  const [isCameraAvailable, setCameraAvailable] = useState(false);
  const [isRecording, setRecording] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState<Blob | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 60, height: 75 } })
        .then((stream) => {
          const video = videoRef.current;
          if (!video) return;
          video.srcObject = stream;
          video.play();
          setCameraAvailable(true);
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
          setCameraAvailable(false);
        });
    } else {
      console.error("getUserMedia is not supported.");
      setCameraAvailable(false);
    }
  }, []);

  const handleStartRecording = () => {
    const video = videoRef.current;
    const stream = video?.srcObject;
    if (!video || !stream) return;

    const mediaRecorder = new MediaRecorder(stream as MediaStream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    setRecording(false);
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleSaveRecording = () => {
    const blob = new Blob(chunksRef.current, { type: "video/webm" });
    setRecordedVideoBlob(blob);
    downloadVideo(blob);
  };

  const downloadVideo = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "recorded_video.webm";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "440px",
          backgroundColor: "black",
          display: "inline-flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "926px",
            height: "440px",
            backgroundColor: "white",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "926px",
            height: "440px",
            backgroundColor: "black",
            opacity: "0.5",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Ai 면접 준비가 되시면 아래 시작 버튼을 누르세요.
        </div>
        <div style={{ position: "absolute", alignItems: "center" }}>
          <>
            <video
              ref={videoRef}
              width={60}
              height={75}
              style={{ objectFit: "cover" }}
            />
          </>
          <div
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Pretendard",
              fontWeight: "500",
            }}
          >
            나
          </div>
        </div>
      </div>
      <div>
        {!isRecording ? (
          <button onClick={handleStartRecording}>Start Recording</button>
        ) : (
          <button onClick={handleStopRecording}>Stop Recording</button>
        )}
        {recordedVideoBlob && (
          <div>
            <video src={URL.createObjectURL(recordedVideoBlob)} controls />
            <button onClick={handleSaveRecording}>Save Recording</button>
          </div>
        )}
      </div>
    </div>
  );
}
