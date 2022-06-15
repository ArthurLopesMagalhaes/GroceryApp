import { Container, Footer, Phrase, Title } from "./styles";
import SplashImg from "../../assets/splashImage.png";
import { Button } from "../../components/Button";
import { StatusBar } from "react-native";

export const SplashScreen = () => {
  return (
    <Container source={SplashImg} resizeMode="cover">
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Footer>
        <Title>Verdo</Title>
        <Phrase>The best grocery ordering & delivery app of the century</Phrase>
        <Button label="Next" />
      </Footer>
    </Container>
  );
};
