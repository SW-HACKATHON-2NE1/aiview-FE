import React, { useEffect, useRef, useState } from 'react';
import styled from "@emotion/styled";
import Interviewer from "@public/icons/interviewer.svg";

const Startbtn = styled("button")(({ theme }) => ({
    backgroundColor: "#497AF8",
    border: "1px solid",
    borderRadius: "100%",
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "pretendard",
    color: "white",
    width: "80px",
    height: "80px",
}));

const Endbtn = styled("button")(({ theme }) => ({
    backgroundColor: "#000000",
    border: "1px solid",
    borderRadius: "100%",
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "pretendard",
    color: "white",
    width: "80px",
    height: "80px",
}));

const Loaddiv = styled("div")(({ theme }) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    opacity: "0.5",
    fontWeight: 700,
    fontFamily: "pretendard",
    color: "white",
    width: "926px",
    height: "440px",
}));

const Interviewerdiv = styled("div")(({ theme }) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    // backgroundImage: `url(${Interviewer})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    fontWeight: 700,
    fontFamily: "pretendard",
    width: "926px",
    height: "440px",
  }));

  function Timer({ setTimerRunning, timerRunning }: any) {
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        if (sec > 0) {
            setSec((sec) => sec - 1);
        }
        if (sec === 0) {
            if (min === 0) {
            clearInterval(id);
            setTimerRunning(false); // Stop the timer
            } else {
            setMin((min) => min - 1);
            setSec(59);
            }
        }
        }, 1000);
        return () => clearInterval(id);
    }, [min, sec]);

    return (
        <div style={{ color: '#FF3434', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>
            {timerRunning ? `${min} : ${sec}` : '00:00'}
        </div>
    );
}

export default function CameraCapture() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [isCameraAvailable, setCameraAvailable] = useState(false);
  const [isRecording, setRecording] = useState(false);
  const [recordedVideoBlob, setRecordedVideoBlob] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      navigator.mediaDevices.getUserMedia({ video: { width: 60, height: 75 } })
        .then(stream => {
          const video = videoRef.current;
          video.srcObject = stream;
          video.play();
          setCameraAvailable(true);
        })
        .catch(error => {
          console.error('Error accessing camera:', error);
          setCameraAvailable(false);
        });
    } else {
      console.error('getUserMedia is not supported.');
      setCameraAvailable(false);
    }
    }, []);

  const handleStartRecording = () => {
    const video = videoRef.current;
    const stream = video.srcObject;
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    setRecording(false);
  };

  const handleDataAvailable = event => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleSaveRecording = () => {
    const blob = new Blob(chunksRef.current, { type: 'video/webm' });
    setRecordedVideoBlob(blob);
    downloadVideo(blob);
  };

  const downloadVideo = blob => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recorded_video.webm';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (  
    <div>
        <div style={{ position: "relative", width: "100%", height: "440px", backgroundColor: "black", display: "inline-flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}>
            <div style={{ position: "absolute", width: "926px", height: "440px", backgroundColor: "white"}} />
            <div style={{ position: "absolute", width: "926px", height: "440px", backgroundColor: "black", opacity: "0.5", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>Ai 면접 준비가 되시면 아래 시작 버튼을 누르세요.</div>
            <div style={{ position: "absolute", alignItems: "center"}}>
                <>
                <video ref={videoRef} width={60} height={75} style={{ objectFit: 'cover' }} />
                </>
                <div style={{color: 'black', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500'}}>나</div>
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
