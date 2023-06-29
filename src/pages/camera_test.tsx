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
    const [timerRunning, setTimerRunning] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isEnding, setEnding] = useState(false);

    useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        navigator.mediaDevices
        .getUserMedia({ video: { width: 60, height: 75 } })
        .then((stream) => {
            const video = videoRef.current;
            video.srcObject = stream;
            video.play();
            setCameraAvailable(true);
        })
        .catch((error) => {
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
        setTimerRunning(true); // Start the timer
        setLoading(false); // Hide the Loaddiv
        setEnding(false); // Hide the ending message
    };

    const handleStopRecording = () => {
        const mediaRecorder = mediaRecorderRef.current;
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        setRecording(false);
        setTimerRunning(false); // Stop the timer
        setEnding(true); // Show the ending message
        };

        const handleDataAvailable = (event) => {
        if (event.data.size > 0) {
            chunksRef.current.push(event.data);
        }
        
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        setRecordedVideoBlob(blob);
        
        if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recorded_video.webm';
            link.click();
            URL.revokeObjectURL(url);
        }

    };

    const handleSaveVideo = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        setRecordedVideoBlob(blob);
    };

    const downloadVideo = () => {
        if (recordedVideoBlob) {
            const url = URL.createObjectURL(recordedVideoBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recorded_video.webm';
            link.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        
    <div>
        <div
        style={{
            position: 'relative',
            width: '100%',
            height: '440px',
            backgroundColor: 'black',
            display: 'inline-flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
        }}
        >
            <Interviewerdiv />
            {isLoading && <Loaddiv>Ai 면접 준비가 되시면 아래 시작 버튼을 누르세요.</Loaddiv>}
            <div style={{ position: 'absolute', alignItems: 'center' }}>
                <div style={{ position: "relative", display: "inline-flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}>
                    <video ref={videoRef} width={60} height={75} style={{ objectFit: 'cover', margin: '16px 0px 0px 830px'}} />
                    <div style={{ color: 'black', fontSize: 16, fontWeight: '500', margin: '8px 0px 0px 830px' }}>나</div>
                </div>
            </div>
            <div style={{ position: 'absolute', background: '#1A1A1A', borderRadius: 50, bottom: 40, left: '50%', transform: 'translateX(-50%)', alignItems: 'center', display: isLoading ? 'none' : 'flex', color: 'white', paddingLeft: 32, paddingRight: 32, paddingTop: 16, paddingBottom: 16, }}>
                <div style={{margin: "5px"}}>Q.</div>
                <div>TCP, UDP에 대해서 아는대로 설명해보세요.</div>
            </div>
            {isEnding && <Loaddiv>질문 면접이 종료되었습니다.</Loaddiv>}
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginTop: "48px"}}>
            <div>
                {!isRecording ? (
                    <Startbtn onClick={handleStartRecording}>시작</Startbtn>
                ) : (
                    <Endbtn onClick={handleStopRecording}>정지</Endbtn>
                )}
            </div>
            <div style={{ color: '#666666', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', marginTop: '16px' }}>면접 시간</div>
            <Timer timerRunning={timerRunning} setTimerRunning={setTimerRunning} />
        </div>
    </div>
);
}
