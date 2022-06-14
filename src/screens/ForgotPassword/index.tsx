import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {
  CardsContainer,
  CodeContentBox,
  Container,
  ContenScreen,
  Content,
  Heading,
  InputsContainer,
  ResenCodeMsg,
  SendWarning,
  ResenCodeMsgNumber,
} from "./styles";

import SmsSvg from "../../assets/sms.svg";
import EmailSvg from "../../assets/email.svg";

import { ContactWayCard } from "./components/ContactWayCard";
import { InputNumbers } from "./components/InputNumbers";

export const ForgotPassword = () => {
  return (
    <Background>
      <Container>
        <Header label="Forgot password?" />
        {/* <ContenScreen>
          <CodeContentBox>
            <SendWarning>Code has been send to +6282******39</SendWarning>
            <InputsContainer>
              <InputNumbers />
              <InputNumbers />
              <InputNumbers />
              <InputNumbers />
            </InputsContainer>
            <ResenCodeMsg>
              Resend code in <ResenCodeMsgNumber>56</ResenCodeMsgNumber> s
            </ResenCodeMsg>
          </CodeContentBox>
        </ContenScreen>
        <Button label="Next" /> */}

        <Heading>
          Select which contact details should we use to reset your password
        </Heading>
        <Content>
          <CardsContainer>
            <ContactWayCard
              title="via SMS:"
              info="+6282******39"
              icon={SmsSvg}
            />
            <ContactWayCard
              title="via Email:"
              info="ex***le@yourdomain.com"
              icon={EmailSvg}
            />
          </CardsContainer>
          <Button label="Next" />
        </Content>
      </Container>
    </Background>
  );
};
