import Button from "@/components/Button";

export default function ComponentsPage() {
  return (
    <main>
      <h1>테마 모음 페이지</h1>
      <div
        style={{
          height: "3px",
          backgroundColor: "gray",
          width: "auto",
          margin: "0 10px",
        }}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
        <Button onClick={() => alert("you just clicked test button :3")}>
          다음
        </Button>
      </div>
    </main>
  );
}
