import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { CardsContainer, Container, Content, Heading } from "./styles";

import { PaymentMethodItem } from "../../components/PaymentMethodItem";
import PaypalSvg from "../../assets/paypal.svg";
import VisaSvg from "../../assets/visa.svg";
import PayoneerSvg from "../../assets/payoneer.svg";
import { CardButton } from "../../components/CardButton";
import { useNavigation } from "@react-navigation/native";

export const PaymentMethod = () => {
  const navigation = useNavigation();

  const goToUploadPhoto = () => {
    navigation.navigate("UploadPhoto");
  };

  return (
    <Background>
      <Container>
        <Header label="Payment method" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          <CardsContainer>
            <CardButton height={80}>
              <PaypalSvg />
            </CardButton>
            <CardButton height={80}>
              <VisaSvg />
            </CardButton>
            <CardButton height={80}>
              <PayoneerSvg />
            </CardButton>
          </CardsContainer>
          <Button label="Next" onPress={goToUploadPhoto} />
        </Content>
      </Container>
    </Background>
  );
};
