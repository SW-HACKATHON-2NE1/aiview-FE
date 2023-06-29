import { relative } from "path";
import { useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function ThemePage() {
  function Timer() {
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        if (sec > 0) {
          setSec(sec => sec - 1);
        }
        if (sec === 0){
          if (min === 0){
            clearInterval(id);
          }
          else {
            setMin(min - 1);
            setSec(59);
          }
          clearInterval(id);
        }
      }, 1000);
      return () => clearInterval(id);
    }, [min, sec]);

    return <div style={{color: '#FF3434', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>{min} : {sec}</div>
  }

  return (
    <main>
      <div style={{ position: "relative", width: "100%", height: "440px", backgroundColor: "black", display: "inline-flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column"}}>
        <div style={{ position: "absolute", width: "926px", height: "440px", backgroundColor: "white"}} />
        <div style={{ position: "absolute", width: "926px", height: "440px", backgroundColor: "black", opacity: "0.5", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>Ai 면접 준비가 되시면 아래 시작 버튼을 누르세요.</div>
        <div style={{ position: "absolute", alignItems: "center"}}>
          <Webcam style={{width: 60, height: 75, background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} />
          <div style={{color: 'black', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500'}}>나</div>
        </div>
      </div>

      <div style={{ height: "100%", width: "100%", display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>

        <div style={{ height: "48px"}} />
        
        <button style={{width: '80px', height: '80px', background: '#497AF8', borderRadius: "100%", color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>시작</button>

        <div style={{ height: "24px" }}/>

        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{color: '#666666', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>면접 시간</div>
          {Timer()}
        </div>

        <video autoPlay />
      </div>
    </main>
  );
}
