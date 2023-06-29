import RadarChart from "@/components/RadarChart";
import WordSpread from "@/components/WordsSpread";
import QnASection from "@/components/pages/result/QnASection";
import useSWR from "swr";
import styled from "@emotion/styled";
import CSR from "@/components/CSR";

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

const PageBodyContainer = styled("div")({
  display: "flex",
  width: "100vw",
  justifyContent: "center",
  "& section:nth-of-type(1)": {
    display: "flex",
    flexDirection: "column",
    gap: "120px",
  },
});

function PageBody() {
  const data = useSWR<ReportAPIResponse>([
    "http://54.180.14.177/report",
    typeof localStorage !== undefined ? localStorage.getItem("token") : "",
  ]);

  if (data.isLoading || !data.data || !data.data.reports)
    return <>loading...</>;
  return (
    <PageBodyContainer>
      <section>
        <div>
          <h2>단어 빈도</h2>
          <div>
            <WordSpread
              {...{
                angry: data.data.angry,
                calm: data.data.calm,
                confused: data.data.confused,
                disgusted: data.data.disgusted,
                fear: data.data.fear,
                happy: data.data.happy,
                sad: data.data.sad,
                surprised: data.data.surprised,
              }}
            />
          </div>
        </div>
        <div>
          <h2>나의 개발 역량 다이어그램</h2>
          <div>
            <RadarChart
              numbers={{
                scoreAL: data.data.scoreAL,
                scoreDB: data.data.scoreDB,
                scoreDS: data.data.scoreDS,
                scoreIS: data.data.scoreIS,
                scoreNT: data.data.scoreNT,
                scoreOS: data.data.scoreOS,
              }}
            />
          </div>
        </div>
      </section>
      <VerticalDivider />
      <QnASection qnaArr={data.data.reports} />
    </PageBodyContainer>
  );
}

export default function ResultPage() {
  return (
    <PageContainer>
      <h1>AI 면접 결과 리포트</h1>
      <CSR>
        <PageBody />
      </CSR>
    </PageContainer>
  );
}
