import CollapseBar from "@/components/Collapse";
import Tabs from "@/components/Tabs";
import S from "./QnASection.styled";
import { useState } from "react";

interface QnASectionProps {
  qnaArr: Array<{
    question: string;
    transcription: string;
    score: number;
    feedback: string;
    bestAnswer: string;
    pronunciationScore: number;
  }>;
}
function QnASection({ qnaArr }: QnASectionProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const {
    question,
    transcription,
    pronunciationScore,
    score,
    feedback,
    bestAnswer,
  } = qnaArr[currentTabIndex];

  const formattedTranscription = transcription.replace(
    /%(.+?)%/g,
    (match, p1) => {
      return `<span style="color: red; background-color: rgba(255, 52, 52, 0.1); margin: 0px">${p1.trim()}</span>`;
    }
  );
  const existingText = transcription.replace(/%(.+?)%/g, "");

  return (
    <section>
      <h2>질문별 분석</h2>
      <Tabs
        onTabChanged={(v) => setCurrentTabIndex(+v[2] - 1)}
        items={qnaArr.map((_, i) => `질문${i + 1}`)}
      />
      <S.QnAContainer>
        <S.SpeakSubSection>
          <div>
            <h3>AI의 질문</h3>
            <p>{question}</p>
          </div>
          <div>
            <h3>당신의 답변</h3>
            <p dangerouslySetInnerHTML={{ __html: formattedTranscription }} />
            <p style={{ color: "black" }}>{existingText}</p>
          </div>
          <S.PointContainer>
            <span>발음 평가 점수</span>
            <span>
              {(pronunciationScore * 100).toFixed(2).padStart(2, "0")}점
            </span>
          </S.PointContainer>
        </S.SpeakSubSection>

        <S.StyledCollapseBar>
          <div>
            <S.PointContainer>
              <span>질문에 대한 적절성 평가</span>
              <span>{score.toFixed(0).padStart(2, "0")}점</span>
            </S.PointContainer>

            <CollapseBar.Button />
          </div>

          <CollapseBar.Body>
            <div>
              <h3>피드백</h3>
              <p>{feedback}</p>
            </div>
            <div>
              <h3>모범 답안</h3>
              <p>{bestAnswer}</p>
            </div>
          </CollapseBar.Body>
        </S.StyledCollapseBar>
        <S.ReplyButton>나의 녹화 다시 보기</S.ReplyButton>
      </S.QnAContainer>
    </section>
  );
}

export default QnASection;
