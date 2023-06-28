import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";
import List from "@/components/List";
import ArrowRightIcon from "@public/icons/arrow_right.svg";

export default function ComponentsPage() {
  return (
    <main>
      <h1>컴포넌트 모음 페이지</h1>
      <div
        style={{
          height: "3px",
          backgroundColor: "gray",
          width: "auto",
          margin: "0 10px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: "10px",
          marginTop: "50px",
        }}
      >
        <Button onClick={() => alert("you just clicked test button :3")}>
          다음
        </Button>
        <GridSelection
          onSelectChanged={(v) =>
            console.log("grid selection value changed to ", v)
          }
          items={[
            "자료구조",
            "알고리즘",
            "네트워크",
            "운영체제",
            "데이터베이스",
            "정보보호",
          ]}
          style={{
            gap: "10px",
            width: "fit-content",
            height: "fit-content",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <List
            defaultIcon={<ArrowRightIcon />}
            style={{
              overflowX: "hidden",
              width: "403px",
              height: "422px",
              padding: "16px",
            }}
            items={[
              "생산・제조",
              "영업・고객상담",
              "건설",
              "금융",
              "디자인",
              "미디어",
              "전문・특수직",
            ]}
          />
          <List
            style={{
              overflowX: "hidden",
              width: "403px",
              height: "422px",
              padding: "16px",
            }}
            items={[
              "응용프로그래머",
              "네트워크・보안・운영",
              "빅테이터・AI(인공지능)",
              "게임개발",
              "HW・임베디드",
              "SW・솔루션・ERP",
              "서비스기획・PM",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
