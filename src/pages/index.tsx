import React from 'react';
import Mainimage from "@public/icons/main_image.svg";
import Button from "@/components/Button";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Mainbutton = styled("button")(({ theme }) => ({
  backgroundColor: theme.color.blue,
  border: "1px solid #000000",
  borderRadius: "10px",
  fontSize: "20px",
  fontWeight: 700,
  color: "white",
  width: "217px",
  height: "56px",
}));

export default function Home() {
  return (
    <main>
      <div style={{ height: "23px"}}/>
      <Container>
        <LeftSection>
          <Mainimage />
        </LeftSection>
        <RightSection>
          <div style={{ color: '#1A1A1A', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: "44px", wordWrap: 'break-word' }}>
            AI로 실전처럼 면접을 연습하고 <br/>자신의 역량을 파악해보세요
          </div>
          <div style={{ height: "56px"}}/>
          <Mainbutton onClick={() => { window.location.href = 'http://localhost:3000/select'; }}>
            면접 시작하기
          </Mainbutton>
        </RightSection>
      </Container>
    </main>
  );
}
