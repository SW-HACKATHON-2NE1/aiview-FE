import { useEffect } from "react";
import Mainimage from "@public/images/main_image.svg";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  gap: 140px;
  align-items: center;
  margin: 140px auto;
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

const fetchData = async () => {
  try {
    const storedToken = localStorage.getItem("token");

    console.log("storedToken :", storedToken);

    if (storedToken) return;
    const { token } = await fetch("https://aiview.shop/").then((res) =>
      res.json()
    );
    localStorage.setItem("token", token);
    console.log("Token stored:", token);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function Home() {
  useEffect(() => {
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
