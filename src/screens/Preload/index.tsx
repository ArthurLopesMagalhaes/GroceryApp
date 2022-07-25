import { Background } from "../../components/Background";
import { Container } from "../../components/Container";

import LogoSvg from "../../assets/logo.svg";
import { Center } from "./styles";

export const Preload = () => {
  return (
    <Background>
      <Container>
        <Center>
          <LogoSvg width={346} height={334} />
        </Center>
      </Container>
    </Background>
  );
};
