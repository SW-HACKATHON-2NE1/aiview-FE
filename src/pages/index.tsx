import Mainimage from "@public/images/main_image.svg";
import styled from "@emotion/styled";
import LinkButton from "@/components/LinkButton";
import Button from "@/components/Button";

const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  gap: 140px;
  align-items: center;
  margin: 163px auto 140px auto;
`;

const LeftSection = styled.section`
  flex: 1;
`;

const RightSection = styled("section")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 56,
  "& > p": {
    color: "#1A1A1A",
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "44px",
  },
});

export default function Home() {
  return (
    <Container>
      <LeftSection>
        <Mainimage />
      </LeftSection>
      <RightSection>
        <p>
          AI로 실전처럼 면접을 연습하고 <br />
          자신의 역량을 파악해보세요
        </p>
        <LinkButton href="/select" Component={Button}>
          면접 시작하기
        </LinkButton>
      </RightSection>
    </Container>
  );
}
