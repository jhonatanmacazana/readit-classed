import Link from "next/link";
import { FC } from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";

import BlueButton from "#root/components/Shared/BlueButton";

const StyledSVG = styled(SVG)`
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div`
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: white;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(243, 244, 246, 1);
  border-width: 1px;
  border-radius: 0.25rem;
  :hover {
    border-color: rgba(59, 130, 246, 1);
    background-color: white;
  }
`;

const SearchIcon = styled.i`
  padding-left: 1rem;
  padding-right: 0.75rem;
  color: rgba(107, 114, 128, 1);
`;

const AuthSection = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-right: 0.75rem;
  background-color: transparent;
  border-radius: 0.25rem;
  width: 40rem;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const LoginButton = styled(BlueButton)`
  width: 8rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 1rem;
  line-height: 1.25rem;
`;

const SignUpButton = styled(BlueButton)`
  width: 8rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  line-height: 1.25rem;
`;

const Navbar: FC = () => {
  return (
    <Wrapper>
      <TitleSection>
        <Link href="/">
          <a>
            <StyledSVG src={"images/reddit.svg"} />
          </a>
        </Link>
        <Title>
          <Link href="/">readit</Link>
        </Title>
      </TitleSection>

      <SearchSection>
        <SearchIcon className="fas fa-search" />
        <SearchInput type="text" placeholder="Search" />
      </SearchSection>

      <AuthSection>
        <Link href="/login">
          <LoginButton hollow={true}>log in</LoginButton>
        </Link>
        <Link href="/register">
          <SignUpButton>sign up</SignUpButton>
        </Link>
      </AuthSection>
    </Wrapper>
  );
};

export default Navbar;
