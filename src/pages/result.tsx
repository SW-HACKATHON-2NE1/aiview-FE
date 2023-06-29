import RadarChart from "@/components/RadarChart";
import WordSpread from "@/components/WordsSpread";
import QnASection from "@/components/pages/result/QnASection";
import styled from "@emotion/styled";

const VerticalDivider = styled("div")(({ theme }) => ({
  width: "1px",
  height: "100vw",
  backgroundColor: theme.color.G100,
  margin: "0px 120px",
}));

const PageContainer = styled("div")({
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  "& h1": {
    marginTop: "90px",
    marginBottom: "120px",
  },
  "& h2": {
    marginBottom: "24px",
  },
});

const PageBody = styled("div")({
  display: "flex",
  width: "100vw",
  justifyContent: "center",
  "& section:nth-of-type(1)": {
    display: "flex",
    flexDirection: "column",
    gap: "120px",
  },
});

const defaultWords = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
  {
    text: "tolaaad",
    value: 264,
  },
  {
    text: "miaaaastake",
    value: 131,
  },
  {
    text: "thaaaought",
    value: 56,
  },
  {
    text: "baaaad",
    value: 77,
  },
];
const defaultNumbers = {
  scoreAL: 1,
  scoreDB: 0.3,
  scoreDS: 0.12,
  scoreIS: 0.3,
  scoreNT: 0.5,
  scoreOS: 0.9,
};
const defaultQnAs = [
  {
    question: "TCP, UDP에 대해서 아는대로 설명해보세요.",
    answer:
      "페이징은 메모리를 동일한 크기의 페이지로 분할하여 물리 메모리의 프레임에 매핑하는 메모리 관리 기법입니다. 페이지 테이블을 사용하여 가상 주소를 물리 주소로 변환하며, 이를 통해 메모리 단편화를 줄이고, 가상 메모리 사용을 가능하게 합니다. 이 기법은 메모리를 효율적으로 사용하고 보호하는 데 도움이 되지만, 관리 오버헤드가 발생할 수 있습니다.",
    speakPoint: 0,
    answerPoint: 0,
    feedback:
      "답변에는 TCP와 UDP에 대한 설명이 혼동되고 잘못 표현되어있습니다. 실제로 TCP는 연결 지향형 프로토콜로, 데이터 전송 전에 3-way handshake를 통해 연결을 설정합니다. TCP는 데이터의 순서보장과 신뢰성을 제공합니다. 반대로, UDP는 비연결형 프로토콜로, 연결 설정 없이 데이터를 전송합니다. UDP는 빠른 전송을 제공하지만, 신뢰성이나 순서 보장은 하지 않습니다. 답변을수정하여 TCP와 UDP의 특징을 정확하게 반영하는 것이 중요합니다.",
    correctAnswer:
      "TCP(Transmission Control Protocol)는 연결 지향형 프로토콜로, 통신을 시작하기 전에 두 시스템 간에 연결을 설정합니다. 이는 3-way handshake 과정을 통해 이루어집니다. TCP는 데이터의 순서 보장, 신뢰성, 혼잡 제어 및 흐름 제어를 제공합니다. 이로 인해 높은 신뢰성이 필요한 애플리케이션에서 주로 사용됩니다. 반면, UDP(User Datagram Protocol)는 비연결형 프로토콜로, 데이터를 전송하기 전에 연결을 설정하지 않습니다. UDP는 낮은 지연 시간과 빠른 전송을 제공하지만, 데이터의 순서 보장이나 신뢰성은 제공하지 않습니다. 이로 인해 실시간 스트리밍, 게임, VoIP 등 빠른 데이터 전송이 중요한 경우에 적합합니다.",
  },
];
export default function ResultPage() {
  return (
    <PageContainer>
      <h1>AI 면접 결과 리포트</h1>
      <PageBody>
        <section>
          <div>
            <h2>단어 빈도</h2>
            <div>
              <WordSpread words={defaultWords} />
            </div>
          </div>
          <div>
            <h2>나의 개발 역량 다이어그램</h2>
            <div>
              <RadarChart numbers={defaultNumbers} />
            </div>
          </div>
        </section>
        <VerticalDivider />
        <QnASection qnaArr={defaultQnAs} />
      </PageBody>
    </PageContainer>
  );
}
