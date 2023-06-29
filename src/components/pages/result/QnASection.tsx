import Button from "@/components/Button";
import CollapseBar from "@/components/Collapse";
import Tabs from "@/components/Tabs";
import styled from "@emotion/styled";
import { useState } from "react";

const QnAContainer = styled("div")(({ theme }) => ({
  marginTop: "32px",
  "& h3": {
    color: theme.color.G500,
    fontSize: "18px",
    fontWeight: 500,
  },
  "& p": {
    color: theme.color.G800,
    fontSize: "20px",
    lineHeight: "44px",
  },
}));

const SpeakSubSection = styled("section")(({ theme }) => ({
  padding: "40px 24px",
  display: "flex",
  flexDirection: "column",
  width: "690px",
  gap: "56px",
  borderRadius: "4px",
  border: `1px solid ${theme.color.G200}`,
}));

const PointContainer = styled("div")(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  display: "flex",
  gap: "24px",

  "& span:nth-of-type(1)": {
    color: theme.color.G900,
  },
  "& span:nth-of-type(2)": {
    color: theme.color.blue,
  },
}));

const StyledCollapseBar = styled(CollapseBar)(({ theme }) => ({
  borderRadius: "4px",
  padding: "32px 24px",
  marginTop: "16px",
  border: "1px solid #ccc",
  width: "690px",
  "& > div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& > div:nth-of-type(2)": {
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    "& > div:nth-of-type(2) > h3": {
      color: theme.color.blue,
    },
  },
}));

const ReplyButton = styled(Button)({
  marginTop: "56px",
  width: "738px",
});

interface QnASectionProps {
  qnaArr: Array<{
    question: string;
    answer: string;
    speakPoint: number;
    answerPoint: number;
    feedback: string;
    correctAnswer: string;
  }>;
}
function QnASection({ qnaArr }: QnASectionProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { question, answer, speakPoint, answerPoint, feedback, correctAnswer } =
    qnaArr[currentTabIndex];

  return (
    <section>
      <h2>질문별 분석</h2>
      <Tabs
        onTabChanged={(v) => setCurrentTabIndex(+v[2] - 1)}
        items={qnaArr.map((_, i) => `질문${i + 1}`)}
      />
      <QnAContainer>
        <SpeakSubSection>
          <div>
            <h3>AI의 질문</h3>
            <p>{question}</p>
          </div>
          <div>
            <h3>당신의 답변</h3>
            <p>{answer}</p>
          </div>
          <PointContainer>
            <span>발음 평가 점수</span>
            <span>{speakPoint.toFixed(2).padStart(2, "0")}점</span>
          </PointContainer>
        </SpeakSubSection>

        <StyledCollapseBar>
          <div>
            <PointContainer>
              <span>질문에 대한 적절성 평가</span>
              <span>{answerPoint.toFixed(0).padStart(2, "0")}점</span>
            </PointContainer>

            <CollapseBar.Button />
          </div>

          <CollapseBar.Body>
            <div>
              <h3>피드백</h3>
              <p>{feedback}</p>
            </div>
            <div>
              <h3>모범 답안</h3>
              <p>{correctAnswer}</p>
            </div>
          </CollapseBar.Body>
        </StyledCollapseBar>
        <ReplyButton>나의 녹화 다시 보기</ReplyButton>
      </QnAContainer>
    </section>
  );
}

export default QnASection;
