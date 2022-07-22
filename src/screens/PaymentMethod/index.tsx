import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CardButton } from "../../components/CardButton";
import { Container } from "../../components/Container";
import { CardsContainer, Content, Heading } from "./styles";
import PaypalSvg from "../../assets/paypal.svg";
import VisaSvg from "../../assets/visa.svg";
import PayoneerSvg from "../../assets/payoneer.svg";

export const PaymentMethod = () => {
  const navigation = useNavigation();
  const [paymentSelected, setPaymentSelected] = useState("");

  const handlePaymentMethod = (method: string) => {
    setPaymentSelected(method);
  };

  const goToUploadPhoto = () => {
    navigation.navigate("UploadPhoto");
  };

  return (
    <Background>
      <Container>
        <Header label="Payment method" onPress={() => navigation.goBack()} />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          <CardsContainer>
            <CardButton
              height={80}
              selected={paymentSelected === "paypal"}
              onPress={() => handlePaymentMethod("paypal")}
            >
              <PaypalSvg />
            </CardButton>
            <CardButton
              height={80}
              selected={paymentSelected === "visa"}
              onPress={() => handlePaymentMethod("visa")}
            >
              <VisaSvg />
            </CardButton>
            <CardButton
              height={80}
              selected={paymentSelected === "payoneer"}
              onPress={() => handlePaymentMethod("payoneer")}
            >
              <PayoneerSvg />
            </CardButton>
          </CardsContainer>
          <Button label="Next" onPress={goToUploadPhoto} />
        </Content>
      </Container>
    </Background>
  );
};
