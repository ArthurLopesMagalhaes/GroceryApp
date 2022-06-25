import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { OthersItem } from "./components/OthersItem";
import { ScrollView } from "./styles";

import LanguageSvg from "../../assets/language.svg";
import PaymentSvg from "../../assets/payment.svg";

export const Others = () => {
  return (
    <Background>
      <Container>
        <Header label="Others" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <OthersItem label="Language" icon={LanguageSvg} text={"English"} />
          <OthersItem label="Fast Payment" icon={PaymentSvg} />
        </ScrollView>
      </Container>
    </Background>
  );
};
