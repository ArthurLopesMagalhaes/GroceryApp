import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import CongratsSvg from "../../assets/congrats.svg";

import { ButtonContainer, Container, Content, Heading, Phrase } from "./styles";

export const Congrats = () => {
  return (
    <Background>
      <Container>
        <Content>
          <CongratsSvg />
          <Heading>Congrats!</Heading>
          <Phrase>Your profile is read to use</Phrase>
        </Content>
        <ButtonContainer>
          <Button label="Got to homepage" />
        </ButtonContainer>
      </Container>
    </Background>
  );
};
