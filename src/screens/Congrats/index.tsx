import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import CongratsSvg from "../../assets/congrats.svg";

import { ButtonContainer, Content, Heading, Phrase } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";

export const Congrats = () => {
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.reset({
      routes: [{ name: "TabRoutes" }],
    });
  };

  return (
    <Background>
      <Container>
        <Content>
          <CongratsSvg />
          <Heading>Congrats!</Heading>
          <Phrase>Your profile is read to use</Phrase>
        </Content>
        <ButtonContainer>
          <Button label="Got to homepage" onPress={goToHomePage} />
        </ButtonContainer>
      </Container>
    </Background>
  );
};
