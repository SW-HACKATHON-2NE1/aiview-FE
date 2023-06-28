import Button from "@/components/Button";
import RadioButtonGroup from "@/components/RadioButtonGroup";

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
        <RadioButtonGroup
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <RadioButtonGroup.Button name="자료구조" />
            <RadioButtonGroup.Button name="알고리즘" />
            <RadioButtonGroup.Button name="네트워크" />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <RadioButtonGroup.Button name="운영체제" />
            <RadioButtonGroup.Button name="데이터베이스" />
            <RadioButtonGroup.Button name="정보보호" />
          </div>
        </RadioButtonGroup>
      </div>
    </main>
  );
}
