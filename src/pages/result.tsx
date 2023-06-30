import RadarChart from "@/components/RadarChart";
import WordSpread from "@/components/WordsSpread";
import QnASection from "@/components/pages/result/QnASection";
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

export const data = {
  reports: [
    {
      question: "배열(Array)과 연결 리스트(Linked List)의 차이점은 무엇인가요?",
      transcription:
        "베이징은 %메몽리를% 동일한 크기의 %페잊이로% 분할하여 %물리매모리의% 프레임에 매핑하는. %메몰리% 관리 기법입니다 페이지 테이블을 사용하여 %기상% 주소를 물리주소로 변환하며 이를 통해 %메모리딘% 변화를 줄이고 가상 메모리 사용을 가능하게 합니다. 이 기법은 메모리를 효율적으로 사용하고 %보로하는데% 도움이 되지만 %괄리% 오버헤드가 발생할 수 있습니다.",
      score: 56,
      feedback:
        "이 답변은 페이징에 대한 설명이 일부 잘못되었거나 혼동되었습니다. 페이징은 물리 메모리를 동일한 크기인 페이지로 분할하는 메모리 관리 기법입니다. 물리 메모리의 프레임에 매핑되며 페이지 테이블을 사용하여 가상 주소를 물리 주소로 변환합니다. 이를 통해 가상 메모리를 사용하여 메모리 변화를 줄이고 보호하는데 도움을 줍니다. 답변을 수정하여 페이징에 대한 설명을 보다 정확하고 명확하게 전달해야 합니다.",
      bestAnswer:
        "페이징은 운영체제에서 사용되는 메모리 관리 기법 중 하나입니다. 이 기법은 주기억장치인 물리 메모리를 동일한 크기로 분할한 페이지로 관리합니다. 이 때 각 페이지는 고유한 페이지 번호를 가지며, 동일한 크기인 페이지로 동일한 크기의 블록을 작성합니다. 페이지 테이블은 가상 주소를 물리 주소로 변환하는 데 사용됩니다. 만약 프로그램이 요구하는 페이지가 물리 메모리에 없을 경우, 페이지 폴트가 발생하는데 이때 운영체제는 필요한 페이지를 디스크에서 적재하여 메모리에 올립니다. 페이징은 메모리 사용의 효율성을 높이고 보호 기능을 제공하며, 가상 메모리 사용이 가능하게 합니다. 그러나 페이지 테이블 관리 및 페이지 폴트와 같은 추가 오버헤드가 발생할 수 있습니다.",
      pronunciationScore: 0.9128285714285715,
    },
    {
      question: "OSI 7계층에 대해 설명해주세요.",
      transcription:
        "OSI(Open Systems Interconnection) 모델은 네트워크 통신을 7개의 계층으로 나누어 %실명하는% 개념적인 모델입니다. %강% 계층은 특정한 역할과 기능을 담당하며, %댕이터의% 전송과 통신 과정을 단계별로 분리하여 이해할 수 있게 합니다. 이 계층 모델은 물리 계층, 데이터 %리크% 계층, 네트워크 계층, 전송 계층, 세션 계층, 표현 계층, %응룡% 계층으로 구성됩니다.",
      score: 44,
      feedback:
        "당신의 OSI 7계층에 대한 설명은 각 계층의 역할을 명확하게 이해하고 설명하여, 계층적인 구조와 각 계층 사이의 인터페이스에 대한 이해가 두드러지는 좋은 설명이었습니다. 7계층의 역할과 기능을 세밀하게 설명하여 네트워크 프로토콜의 계층화된 구조와 상호작용에 대한 이해를 보여주셨습니다. 이러한 설명은 네트워크 프로토콜의 이해와 통신 시스템의 기본 개념을 갖추고 있다는 것을 나타내며, 훌륭한 답변이었습니다.",
      bestAnswer:
        "물리 계층은 데이터를 전기 신호로 변환하고 전송 매체를 통해 전송하는 역할을 합니다. 데이터 링크 계층은 물리 계층에서 전송된 비트를 프레임으로 그룹화하고 오류 검출 및 복구를 수행합니다. 네트워크 계층은 패킷을 이동시키기 위한 경로 선택과 라우팅을 담당합니다. 전송 계층은 데이터의 신뢰성과 흐름 제어를 담당하여 송신자와 수신자 간의 연결을 관리합니다. 세션 계층은 통신 세션의 설정, 유지, 종료를 담당합니다. 표현 계층은 데이터 형식 변환, 압축, 암호화 등을 수행하여 상호 간의 데이터 표현을 일관되게 합니다. 응용 계층은 사용자와 직접 상호작용하며 응용 프로토콜을 실행합니다.",
      pronunciationScore: 0.9128285714285715,
    },
    {
      question: "DNS의 동작 원리를 설명해주세요.",
      transcription:
        "DNS(Domain Name System)은 인터넷 상에서 도메인 이름과 IP 주소를 %매빙%하는 시스템입니다. 사용자가 도메인 이름을 입력하면, DNS는 해당 %도베인% 이름을 해당하는 IP 주소로 변환하여 통신을 가능하게 합니다.",
      score: 80,
      feedback:
        "당신의 DNS에 대한 동작 원리에 대한 설명은 자세하고 이해하기 쉬웠습니다. DNS의 계층 구조와 도메인 이름을 IP 주소로 변환하는 과정을 명확하게 설명하셨습니다. 또한 DNS의 역할과 기능에 대한 이해도 높았습니다. 이러한 설명은 DNS의 핵심 개념과 동작 원리를 알기 쉽게 전달하며, 훌륭한 답변이었습니다.",
      bestAnswer:
        "DNS 서버는 요청된 도메인 이름을 계층적인 구조로 분리하여 가장 높은 계층부터 순차적으로 도메인 이름을 해석합니다. 루트 DNS 서버에 접근하여 최상위 도메인(Domain) 서버의 IP 주소를 받아온 후, 이를 기반으로 해당 도메인의 authoritative DNS 서버에 질의를 보냅니다. authoritative DNS 서버는 도메인 이름에 대응하는 IP 주소를 반환하고, 이를 중간 DNS 서버를 통해 DNS 클라이언트에 전달합니다.",
      pronunciationScore: 0.9128285714285715,
    },
  ],
  scoreAL: 30,
  scoreDS: 10,
  scoreNT: 55,
  scoreOS: 20,
  scoreDB: 40,
  scoreIS: 30,
  angry: 43,
  calm: 234,
  confused: 43,
  disgusted: 123,
  fear: 32,
  happy: 44,
  sad: 12,
  surprised: 43,
};

function PageBody() {
  /*
  const { isLoading, data } = useSWR<ReportAPIResponse>([
    "https://aiview.shop/report",
    typeof localStorage !== undefined ? localStorage.getItem("token") : "",
  ]);

  if (isLoading || !data || !data.reports) return <>loading...</>;
  */

  return (
    <PageBodyContainer>
      <section>
        <div>
          <h2>자주 표현된 감정</h2>
          <div>
            <WordSpread
              {...{
                angry: data.angry,
                calm: data.calm,
                confused: data.confused,
                disgusted: data.disgusted,
                fear: data.fear,
                happy: data.happy,
                sad: data.sad,
                surprised: data.surprised,
              }}
            />
          </div>
        </div>
        <div>
          <h2>나의 개발 역량 다이어그램</h2>
          <div>
            <RadarChart
              numbers={{
                scoreAL: data.scoreAL,
                scoreDB: data.scoreDB,
                scoreDS: data.scoreDS,
                scoreIS: data.scoreIS,
                scoreNT: data.scoreNT,
                scoreOS: data.scoreOS,
              }}
            />
          </div>
        </div>
      </section>
      <VerticalDivider />
      <QnASection qnaArr={data.reports} />
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
