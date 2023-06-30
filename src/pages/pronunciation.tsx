import CSR from "@/components/CSR";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { data } from "./result";

const PageContainer = styled("div")({
  textAlign: "center",
  padding: "90px 0 276px 0",
});

const TitleBox = styled("div")(({ theme }) => ({
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
  textAlign: "left",
  margin: "32px auto 26px auto",
  borderRadius: "10px",
  width: "690px",
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

const reports = data.reports.map((report) => ({
  question: report.question,
  transcription: report.transcription,
}));

function PageBody() {
  const router = useRouter();
  const index = ~~(router.query["index"] as any); //n번째 질문
  const subjectid = "" + (router.query["subjectid"] as any);

  /*
  const data = useSWR<ReportAPIResponse>([
    "https://aiview.shop/report",
    typeof localStorage !== undefined ? localStorage.getItem("token") : "",
  ]);

  if (data.isLoading || !data.data || !data.data.reports)
    return <>loading...</>;4
    */
  const { transcription, question } = reports[index];

  useEffect(() => {
    setTimeout(() => {
      if (index == 2) router.push("/result");
      else router.push(`/interview/?index=${index + 1}&subjectid=${subjectid}`);
    }, 3000);
  }, []);

  const formattedTranscription = transcription.replace(
    /%(.+?)%/g,
    (match, p1) => {
      return `<span style="color: red; background-color: rgba(255, 52, 52, 0.1); margin: 0px">${p1.trim()}</span>`;
    }
  );
  const existingText = transcription.replace(/%(.+?)%/g, "");

  return (
    <PageContainer>
      <TitleBox>
        <h2>다음 질문을 준비하고 있어요...</h2>
        <h1>{numbericMap[index]}번째 질문에 대한 발음 분석</h1>
      </TitleBox>

      <QuestionTitle>Q. {question}</QuestionTitle>

      <AnswerBox>
        <h2>당신의 답변</h2>
        <p dangerouslySetInnerHTML={{ __html: formattedTranscription }} />
        <p style={{ color: "black" }}>{existingText}</p>
      </AnswerBox>

      <WaitLabel>페이지가 자동으로 넘어가니 잠시만 기다려주세요.</WaitLabel>
    </PageContainer>
  );
}

const numbericMap = ["첫", "두", "세", "네", "다섯", "몇"];
export default function PronunciationPage() {
  return (
    <CSR>
      <PageBody />
    </CSR>
  );
}
