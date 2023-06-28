/**
 * 테스트할 아이콘 "파일 이름"들. 새로 추가할 SVG아이콘 파일명을 배열에 추가해주세요.
 */
const iconNames = [
  "arrow_down",
  "arrow_up",
  "arrow_left",
  "arrow_right",
  "check",
  "check_outline",
  "dots_vertical",
];
import dynamic from "next/dynamic";
const Icons: [string, React.ComponentType<{}>][] = iconNames.map((name) => [
  name,
  dynamic(() => import(`@/../public/icons/${name}.svg`), { ssr: false }),
]);

export default function IconsPage() {
  return (
    <main>
      <h1>Icons 모음 페이지</h1>
      <div
        style={{
          height: "3px",
          backgroundColor: "gray",
          width: "auto",
          margin: "0 10px",
        }}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
        {Icons.map(([name, Icon], i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px black solid",
              padding: "5px",
            }}
          >
            <Icon />
            {name}
          </div>
        ))}
      </div>
    </main>
  );
}
