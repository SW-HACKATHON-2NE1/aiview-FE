import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";
import List from "@/components/List";
import styled from "@emotion/styled";
import ArrowRightIcon from "@public/icons/arrow_right.svg";
import { useState } from "react";

const PageContainer = styled("div")({
  padding: "60px 260px",
  whiteSpace: "nowrap",
  [`& ${Button}`]: {
    marginTop: "140px",
    alignSelf: "center",
  },
});

const PageTitle = styled("h1")({
  marginBottom: "54px",
});
const PageBody = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

const Divider = styled("div")(({ theme }) => ({
  backgroundColor: theme.color.G200,
  width: "auto",
  height: "1px",
}));

const StyledList = styled(List)({
  overflowX: "hidden",
  height: "422px",
});

const JobSelectSection = styled("section")({
  marginTop: "88px",
  display: "flex",
  gap: "133px",
  "& > div": {
    display: "flex",
    gap: "70px",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      margin: "16px",
    },
  },
});

const SubjectSelectSection = styled("section")({
  marginTop: "80px",
  display: "flex",
  gap: "133px",
  "& > div": {
    gap: "10px",
    width: "fit-content",
    height: "fit-content",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

const bigJobs = [
  "생산・제조",
  "영업・고객상담",
  "건설",
  "금융",
  "디자인",
  "미디어",
  "전문・특수직",
];
const smolJobs = [
  "응용프로그래머",
  "네트워크・보안・운영",
  "빅테이터・AI(인공지능)",
  "게임개발",
  "HW・임베디드",
  "SW・솔루션・ERP",
  "서비스기획・PM",
];
const subjects = [
  "자료구조",
  "알고리즘",
  "네트워크",
  "운영체제",
  "데이터베이스",
  "정보보호",
];

interface State {
  bigJob: ValueOf<typeof bigJobs> | null;
  smolJob: ValueOf<typeof smolJobs> | null;
  subject: ValueOf<typeof subjects> | null;
}
export default function SelectPage() {
  const [states, setStates] = useState<State>({
    bigJob: null,
    smolJob: null,
    subject: null,
  });

  const onChanged = (key: keyof State) => (value: string) =>
    setStates((prev) => ({
      ...prev,
      [key]: value,
    }));

  return (
    <PageContainer>
      <PageTitle>AI 가상면접을 시작합니다.</PageTitle>
      <Divider />
      <PageBody>
        <JobSelectSection>
          <h2>직무 선택</h2>
          <div>
            <div>
              <h3>대분류</h3>
              <StyledList
                onSelectChanged={onChanged("bigJob")}
                defaultIcon={<ArrowRightIcon />}
                items={bigJobs}
              />
            </div>
            <div>
              <h3>소분류</h3>
              <StyledList
                onSelectChanged={onChanged("smolJob")}
                items={smolJobs}
              />
            </div>
          </div>
        </JobSelectSection>
        <SubjectSelectSection>
          <h2>과목 선택</h2>
          <GridSelection
            onSelectChanged={onChanged("subject")}
            items={subjects}
          />
        </SubjectSelectSection>
        <Button
          onClick={() => {
            console.log("설정 완료!\n", states);
          }}
        >
          다음
        </Button>
      </PageBody>
    </PageContainer>
  );
}
