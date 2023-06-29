import styled from "@emotion/styled";

const TitleBox = styled("div")(({ theme }) => ({
  marginTop: "90px",
  marginBottom: "44px",
  "& > h1": {
    color: theme.color.blue,
    fontSize: "40px",
    fontWeight: 700,
    marginTop: "16px",
  },
  "& > h2": {
    color: theme.color.G450,
    fontSize: "22px",
    fontWeight: 500,
    lineHeight: "36px",
  },
}));

const QuestionTitle = styled("h2")(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.G700,
  fontWeight: 500,
}));

const AnswerBox = styled("div")(({ theme }) => ({
  padding: "40px 75.5px",
  fontWeight: 500,

  borderRadius: "10px",
  backgroundColor: theme.color.blue95,
  "& > h2": {
    color: theme.color.G500,
    fontSize: "18px",
    lineHeight: "36px",
  },
  "& > p": {
    marginTop: "8px",
    color: theme.color.G800,
    fontSize: "20px",
    lineHeight: "44px",
  },
}));

const WaitLabel = styled("span")(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.G500,
  fontWeight: 500,
}));

const numbericMap = ["첫", "두", "세", "네", "다섯", "몇"];
export default function PronunciationPage() {
  const index = 1;
  const question = "REST API에 대해 설명해주세요.";
  const answer =
    "REST의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 재고받는 모든 것을 의미하고 REST API는 이를 기반으로 만들어진 API를 의미합니다. 즉, REST란 HTTP URI를 텅해 자원를 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미합니다.";

  return (
    <>
      <TitleBox>
        <h2>다음 질문을 준비하고 있어요...</h2>
        <h1>{numbericMap[index - 1]}번째 질문에 대한 발음 분석</h1>
      </TitleBox>

      <QuestionTitle>Q. {question}</QuestionTitle>

      <AnswerBox>
        <h2>당신의 답변</h2>
        <p>{answer}</p>
      </AnswerBox>

      <WaitLabel>페이지가 자동으로 넘어가니 잠시만 기다려주세요.</WaitLabel>
    </>
  );
}
