import S from "./Header.styled";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo>
          <div>로고</div>
          <span>에이뷰</span>
        </S.Logo>
        <span>결과 리포트</span>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
