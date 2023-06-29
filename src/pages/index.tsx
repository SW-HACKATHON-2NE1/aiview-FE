import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem('token');

        console.log("storedToken :",storedToken)

        if (!storedToken) {
          const response = await axios.get('http://54.180.14.177/');
          console.log("response : ",response)
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log('Token stored:', token);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div style={{ height: "23px"}}/>
      <div style={{ height: "100%", width: "100%", display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
          <div style={{color: '#1A1A1A', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: "44px", wordWrap: 'break-word'}}>AI로 실전처럼 면접을 연습하고 <br/>자신의 역량을 파악해보세요</div>
          <div style={{height: "56px"}}/>
          <button style={{width: '217px', height: '56px', padding: 24, background: '#497AF8', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', color: "white"}}>면접 시작하기</button>
      </div>
    </main>
  );
}
