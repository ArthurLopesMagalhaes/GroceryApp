import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, Content, Heading, InputsContainer } from "./styles";

import { PaymentMethodItem } from "../../components/PaymentMethodItem";
import PaypalSvg from "../../assets/paypal.svg";
import VisaSvg from "../../assets/visa.svg";
import PayoneerSvg from "../../assets/payoneer.svg";
import { CardButton } from "../../components/CardButton";
import { Input } from "../../components/Input";

import EyeSvg from "../../assets/eye.svg";

export const ResetPassword = () => {
  return (
    <Background>
      <Container>
        <Header label="Reset password" />
        <Heading>Create a new password</Heading>
        <Content>
          <InputsContainer>
            <Input label="New Password*" icon={EyeSvg} secureTextEntry />
            <Input
              label="Confirm New Password*"
              icon={EyeSvg}
              secureTextEntry
            />
          </InputsContainer>
          <Button label="Save" />
        </Content>
      </Container>
    </Background>
  );
};
