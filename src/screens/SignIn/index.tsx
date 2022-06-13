import { Text } from "react-native";
import { Background } from "../../components/Background";
import { Logo } from "../../components/Logo";
import { Container, Heading } from "./styles";

export const SignIn = () => {
  return (
    <Background>
      <Container>
        <Logo />
        <Heading>Sign to your account</Heading>
      </Container>
    </Background>
  );
};
