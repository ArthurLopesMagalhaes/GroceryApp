import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CardsContainer, Container, Content, Heading } from "./styles";
import CalendarSvg from "../../assets/calendar.svg";
import ArrowDownSvg from "../../assets/arrowdown.svg";
import { PaymentMethodItem } from "../../components/PaymentMethodItem";
import PaypalSvg from "../../assets/paypal.svg";
import VisaSvg from "../../assets/visa.svg";
import PayoneerSvg from "../../assets/payoneer.svg";

export const PaymentMenthod = () => {
  return (
    <Background>
      <Container>
        <Header label="Payment method" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          <CardsContainer>
            <PaymentMethodItem icon={PaypalSvg} />
            <PaymentMethodItem icon={VisaSvg} />
            <PaymentMethodItem icon={PayoneerSvg} />
          </CardsContainer>
          <Button label="Next" />
        </Content>
      </Container>
    </Background>
  );
};
