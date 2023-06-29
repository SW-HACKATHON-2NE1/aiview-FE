import Divider from "@/components/Divider";
import dynamic from "next/dynamic";
import { theme } from "@/core/theme";
import styled from "@emotion/styled";
import Button from "@/components/Button";
import GridSelection from "@/components/GridSelection";
import List from "@/components/List";
import ArrowRightIcon from "@public/icons/arrow_right.svg";
import CollapseBar from "@/components/Collapse";

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
        <CollapseBar
          style={{
            width: "600px",
            borderRadius: "4px",
            padding: "32px 24px",
            border: "1px solid #ccc",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <span>질문에 대한 적절성 평가</span>
              <span style={{ marginLeft: "24px", color: "blue" }}>00점</span>
            </div>

            <CollapseBar.Button />
          </div>

          <CollapseBar.Body
            style={{
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <div>
              <h4>피드백</h4>
              <p>
                답변에는 TCP와 UDP에 대한 설명이 혼동되고 잘못 표현되어
                있습니다. 실제로 TCP는 연결 지향형 프로토콜로, 데이터 전송 전에
                3-way handshake를 통해 연결을 설정합니다. TCP는 데이터의 순서
                보장과 신뢰성을 제공합니다. 반대로, UDP는 비연결형 프로토콜로,
                연결 설정 없이 데이터를 전송합니다. UDP는 빠른 전송을
                제공하지만, 신뢰성이나 순서 보장은 하지 않습니다. 답변을
                수정하여 TCP와 UDP의 특징을 정확하게 반영하는 것이 중요합니다.
              </p>
            </div>
            <div>
              <h4 color="blue">모범 답안</h4>
              <p>
                TCP(Transmission Control Protocol)는 연결 지향형 프로토콜로,
                통신을 시작하기 전에 두 시스템 간에 연결을 설정합니다. 이는
                3-way handshake 과정을 통해 이루어집니다. TCP는 데이터의 순서
                보장, 신뢰성, 혼잡 제어 및 흐름 제어를 제공합니다. 이로 인해
                높은 신뢰성이 필요한 애플리케이션에서 주로 사용됩니다. 반면,
                UDP(User Datagram Protocol)는 비연결형 프로토콜로, 데이터를
                전송하기 전에 연결을 설정하지 않습니다. UDP는 낮은 지연 시간과
                빠른 전송을 제공하지만, 데이터의 순서 보장이나 신뢰성은 제공하지
                않습니다. 이로 인해 실시간 스트리밍, 게임, VoIP 등 빠른 데이터
                전송이 중요한 경우에 적합합니다.
              </p>
            </div>
          </CollapseBar.Body>
        </CollapseBar>
      </div>
    </main>
  );
}
