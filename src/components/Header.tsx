import Link from "next/link";
import S from "./Header.styled";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Link href="/">
          <img src="/images/logo.png" />
        </Link>
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
