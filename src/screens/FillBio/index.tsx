import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Form, Heading } from "./styles";
import CalendarSvg from "../../assets/calendar.svg";
import ArrowDownSvg from "../../assets/arrowdown.svg";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";

export const FillBio = () => {
  const navigation = useNavigation();

  const goToPaymentMethod = () => {
    navigation.navigate("PaymentMethod");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Background>
          <Container>
            <Header label="Fill in your bio" />
            <Heading>
              This data will be displayed in your account profile for security
            </Heading>
            <Form>
              <Input
                label="Full Name*"
                placeholder="Your fullname"
                icon={() => <View />}
              />
              <Input
                label="Nick Name*"
                placeholder="Your nickname"
                icon={() => <View />}
              />
              <Input
                label="Phone Number*"
                placeholder="Your phone number"
                icon={() => <View />}
              />
              <Input
                label="Gender*"
                placeholder="Your gender"
                icon={() => <ArrowDownSvg />}
              />
              <Input
                label="Date of Birth*"
                placeholder="Your date of birth"
                icon={() => <CalendarSvg />}
              />
              <Input
                label="Adrress*"
                placeholder="Your address"
                icon={() => <View />}
              />
              <Button label="Next" onPress={goToPaymentMethod} />
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
