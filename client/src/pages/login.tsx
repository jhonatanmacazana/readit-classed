import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import serverRequest from "#root/api/serverRequest";
import InputGroup from "#root/components/InputGroup";

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

const Login = () => {
  const { handleSubmit, register } = useForm({ mode: "onChange" });

  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  const onSubmit = handleSubmit(async ({ password, username }) => {
    try {
      await serverRequest.post("/auth/login", {
        password,
        username,
      });
      router.push("/");
    } catch (err) {
      setErrors(err.response.data);
    }
  });

  return (
    <Wrapper>
      <Head>
        <title>Login</title>
      </Head>

      <ImageWrapper />
      <FormWrapper>
        <TextContainer>
          <Title>Login</Title>
          <Paragraph>
            By continuing, you agree to our User Agreements and Privacy Policy
          </Paragraph>

          <form onSubmit={onSubmit}>
            <InputGroup
              error={errors.username}
              name="username"
              placeholder="USERNAME"
              reference={register}
              type="text"
            />
            <InputGroup
              error={errors.password}
              name="password"
              placeholder="PASSWORD"
              reference={register}
              type="password"
            />

            <Button type="submit">Login</Button>
          </form>

          <small>
            New to readit ?
            <Link href="/register">
              <ALogin>Sign Up</ALogin>
            </Link>
          </small>
        </TextContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
