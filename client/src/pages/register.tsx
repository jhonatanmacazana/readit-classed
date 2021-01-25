import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 9rem;
  height: 100vh;
  background-image: url("/images/bricks.jpg");
  background-position: center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
`;

const TextContainer = styled.div`
  width: 17.5rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 2.5rem;
`;

const CheckWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const CheckInput = styled.input`
  cursor: pointer;
  margin-right: 0.25rem;
`;

const CheckLabel = styled.label`
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const ErrorBlock = styled.small`
  display: block;
  font-weight: 500;
  color: rgba(220, 38, 38, 1);
`;

const Error = styled.small`
  font-weight: 500;
  color: rgba(220, 38, 38, 1);
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TextInput = styled.input`
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(243, 244, 246, 1);
  border-width: 1px;
  border-color: rgba(156, 163, 175, 1);
  border-radius: 0.25rem;
  margin-right: 0.25rem;
`;

const Button = styled.button`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  background-color: ${props => props.theme.navyBlue};
  border-width: 1px;
  border-color: ${props => props.theme.navyBlue};
  border-radius: 0.25rem;
`;

const ALogin = styled.a`
  margin-left: 0.25rem;
  color: ${props => props.theme.navyBlue};
  text-transform: uppercase;
`;

export default function Register() {
  return (
    <Wrapper>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageWrapper />
      <FormWrapper>
        <TextContainer>
          <Title>Sign Up</Title>
          <Paragraph>
            By continuing, you agree to our User Agreements and Privacy Policy
          </Paragraph>

          <form>
            <CheckWrapper>
              <CheckInput type="checkbox" id="agreement" />
              <CheckLabel htmlFor="agreement">
                I agree to get emails about cool stuff on Readit
              </CheckLabel>

              <ErrorBlock>{/* {errors.agreement} */}</ErrorBlock>
            </CheckWrapper>

            <Label>
              <TextInput placeholder="EMAIL" name="email" type="email" />
              <Error>{/* {error} */}</Error>
            </Label>
            <Label>
              <TextInput placeholder="USERNAME" name="email" type="text" />
              <Error>{/* {error} */}</Error>
            </Label>
            <Label>
              <TextInput
                placeholder="PASSWORD"
                name="password"
                type="password"
              />
              <Error>{/* {error} */}</Error>
            </Label>

            <Button>Sign Up</Button>
          </form>

          <small>
            Already a readitor ?
            <Link href="/login">
              <ALogin>Log In</ALogin>
            </Link>
          </small>
        </TextContainer>
      </FormWrapper>
    </Wrapper>
  );
}
