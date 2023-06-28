import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";

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
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        />
      </div>
    </main>
  );
}
