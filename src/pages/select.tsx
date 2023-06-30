import GridSelection from "@/components/GridSelection";
import ArrowRightIcon from "@public/icons/arrow_right.svg";
import { useState } from "react";

import Divider from "@/components/Divider";
import S from "@/pages/select.styled";

const bigJobs = [
  "IT・인터넷",
  "마케팅・광고・홍보",
  "무역・유통",
  "경영・사무",
  "생산・제조",
  "영업・고객상담",
  "건설",
  "금융",
  "디자인",
  "미디어",
  "전문・특수직",
];
const smolJobs = [
  "QA",
  "앱개발",
  "웹개발",
  "데이터엔지니어・분석・DBA",
  "시스템프로그래머",
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
const subjectIDmap = {
  자료구조: "DS",
  알고리즘: "AL",
  네트워크: "NT",
  운영체제: "OS",
  데이터베이스: "DB",
  정보보호: "IS",
};

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

  const onChanged = (key: keyof State) => (value: string) => {
    if (key === "smolJob")
      scrollTo({ top: window.outerHeight, behavior: "smooth" });
    setStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <S.PageContainer>
      <S.PageTitle>AI 가상면접을 시작합니다.</S.PageTitle>
      <Divider />
      <S.PageBody>
        <S.JobSelectSection>
          <h2>직무 선택</h2>
          <div>
            <S.JobSelectContainer isHidden={false}>
              <h3>대분류</h3>
              <S.StyledList
                onSelectChanged={onChanged("bigJob")}
                defaultIcon={<ArrowRightIcon />}
                items={bigJobs}
              />
            </S.JobSelectContainer>
            <S.JobSelectContainer isHidden={!states.bigJob}>
              <h3>소분류</h3>
              <S.StyledList
                onSelectChanged={onChanged("smolJob")}
                items={smolJobs}
              />
            </S.JobSelectContainer>
          </div>
        </S.JobSelectSection>
        <S.SubjectSelectSection isHidden={!states.smolJob}>
          <h2>과목 선택</h2>
          <GridSelection
            onSelectChanged={onChanged("subject")}
            items={subjects}
          />
        </S.SubjectSelectSection>
        <S.SubmitButton
          isHidden={!states.subject}
          href={`/interview?subjectid=${
            subjectIDmap[states.subject as keyof typeof subjectIDmap]
          }`}
        >
          다음
        </S.SubmitButton>
      </S.PageBody>
    </S.PageContainer>
  );
}
