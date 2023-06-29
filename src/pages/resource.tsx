import Divider from "@/components/Divider";
import dynamic from "next/dynamic";
import { theme } from "@/core/theme";
import styled from "@emotion/styled";
import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";
import List from "@/components/List";
import ArrowRightIcon from "@public/icons/arrow_right.svg";

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

const Icons: [string, React.ComponentType<{}>][] = iconNames.map((name) => [
  name,
  dynamic(() => import(`@/../public/icons/${name}.svg`), { ssr: false }),
]);

const colors = Object.entries(theme.color) as [
  keyof typeof theme.color,
  ValueOf<typeof theme.color>
][];

const ColorBox = styled("div")<{ color: keyof (typeof theme)["color"] }>(
  ({ color, theme }) => ({
    backgroundColor: theme.color[color],
    width: "25px",
    height: "25px",
  })
);

export default function ResourcePage() {
  return (
    <main>
      <h1>리소스 모음 페이지</h1>
      <Divider />
      <h2>아이콘들</h2>
      <Divider />
      <div style={{ display: "flex", gap: "10px", margin: "50px 0" }}>
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
      <Divider />
      <h2>테마 팔레트</h2>
      <Divider />
      <div style={{ display: "flex", gap: "10px", margin: "50px 0" }}>
        {colors.map(([colorName, hexcode], i) => (
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
            {colorName}
            <ColorBox color={colorName} />
            {hexcode}
          </div>
        ))}
      </div>
      <Divider />
      <h2>공용 컴포넌트</h2>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: "10px",
          margin: "50px 0",
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
