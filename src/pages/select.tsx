import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";
import ArrowRightIcon from "@public/icons/arrow_right.svg";
import { useState } from "react";

import Divider from "@/components/Divider";
import S from "@/pages/select.styled";

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
    <S.PageContainer>
      <S.PageTitle>AI 가상면접을 시작합니다.</S.PageTitle>
      <Divider />
      <S.PageBody>
        <S.JobSelectSection>
          <h2>직무 선택</h2>
          <div>
            <div>
              <h3>대분류</h3>
              <S.StyledList
                onSelectChanged={onChanged("bigJob")}
                defaultIcon={<ArrowRightIcon />}
                items={bigJobs}
              />
            </div>
            <div>
              <h3>소분류</h3>
              <S.StyledList
                onSelectChanged={onChanged("smolJob")}
                items={smolJobs}
              />
            </div>
          </div>
        </S.JobSelectSection>
        <S.SubjectSelectSection>
          <h2>과목 선택</h2>
          <GridSelection
            onSelectChanged={onChanged("subject")}
            items={subjects}
          />
        </S.SubjectSelectSection>
        <Button
          onClick={() => {
            console.log("설정 완료!\n", states);
          }}
        >
          다음
        </Button>
      </S.PageBody>
    </S.PageContainer>
  );
}
