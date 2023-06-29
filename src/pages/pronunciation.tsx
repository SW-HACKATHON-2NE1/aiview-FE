import { theme } from "@/core/theme";
import styled from "@emotion/styled";

export default function ThemePage() {
  return (
    <main>
      <div style={{ height: "100%", width: "100%", display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <div style={{ height: "100%", width: "100%", gap: "16px", display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
          <div style={{ color: "#999999", fontSize: "22px", fontFamily: "Pretendard", fontWeight: "500px", wordWrap: "break-word" }}>다음 질문을 준비하고 있어요...</div>
          <div style={{ color: "#497AF8", fontSize: "40px", fontFamily: "Pretendard", fontWeight: "700px", wordWrap: "break-word" }}>질문에 대한 발음 분석</div>
        </div>

        <div style={{ height: "54px"}} />

        <div style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "flex-start", gap: "8px", display: "inline-flex" }}>
          <div style={{ color: "#4C4C4C", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", wordWrap: "break-word" }}>Q.</div>
          <div style={{ color: "#4C4C4C", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", wordWrap: "break-word" }}>REST API에 대해 설명해주세요.</div>
        </div>

        <div style={{ height: "32px" }} />

        <div style={{ width: "690px", height: "100%", paddingLeft: "24px", paddingRight: "24px", paddingTop: "40px", paddingBottom: "40px", background: "#F6F8FE", borderRadius: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "32px", display: "inline-flex" }}>
          <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: "8px", display: 'flex'}}>
            <div style={{width: "539px", color: '#808080', fontSize: "18px", fontFamily: 'Pretendard', fontWeight: '500', lineHeight: '36px', wordWrap: 'break-word'}}>당신의 답변</div>
            <div style={{width: "539px", color: '#333333', fontSize: "20px", fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '44px', wordWrap: 'break-word' }}>REST의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 재고받는 모든 것을 의미하고 REST API는 이를 기반으로 만들어진 API를 의미합니다. 즉, REST란 HTTP URI를 텅해 자원를 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미합니다.</div>
          </div>
        </div>

        <div style={{ height: "70px" }}/>

        <div style={{color: '#808080', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>페이지가 자동으로 넘어가니 잠시만 기다려주세요.</div>
      </div>
    </main>
  );
}
