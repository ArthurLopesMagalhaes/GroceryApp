import { BackgroundGradient, Container, Footer, Phrase, Title } from "./styles";
import SplashImg from "../../assets/splashImage.png";
import { Button } from "../../components/Button";
import { Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SplashScreen = () => {
  const navigation = useNavigation();

  const handleNextButton = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container source={SplashImg} resizeMode="cover">
      <BackgroundGradient>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <Footer>
          <Title>Verdo</Title>
          <Phrase>
            The best grocery ordering & delivery app of the century
          </Phrase>
          <Button label="Next" onPress={handleNextButton} />
        </Footer>
      </BackgroundGradient>
    </Container>
  );
};
