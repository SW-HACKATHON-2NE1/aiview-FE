import { useEffect } from "react";
import axios from "axios";
import Mainimage from "@public/images/main_image.svg";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  gap: 140px;
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("token");

        console.log("storedToken :", storedToken);

        if (!storedToken) {
          const response = await axios.get("http://54.180.14.177/");
          console.log("response : ", response);
          const token = response.data.token;
          localStorage.setItem("token", token);
          console.log("Token stored:", token);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div style={{ height: "23px" }} />
      <Container>
        <LeftSection>
          <Mainimage />
        </LeftSection>
        <RightSection>
          <div
            style={{
              color: "#1A1A1A",
              fontSize: 28,
              fontFamily: "Pretendard",
              fontWeight: "700",
              lineHeight: "44px",
              wordWrap: "break-word",
            }}
          >
            AI로 실전처럼 면접을 연습하고 <br />
            자신의 역량을 파악해보세요
          </div>
          <div style={{ height: "56px" }} />
          <Mainbutton>
            <Link href="/select">면접 시작하기</Link>
          </Mainbutton>
        </RightSection>
      </Container>
    </main>
  );
}
