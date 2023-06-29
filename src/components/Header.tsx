import Link from "next/link";
import S from "./Header.styled";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo>
          <div>로고</div>
          <span><Link href="/">에이뷰</Link></span>
        </S.Logo>
        <div>
        <span>기업 매칭</span>
        <span>결과 리포트</span>
        <span>마이페이지</span>
        </div>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
