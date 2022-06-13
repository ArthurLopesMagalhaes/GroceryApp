import { Background } from "../../components/Background";
import { RememberMe } from "../../components/RememberMe";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  Heading,
  Form,
  DontHaveAccountContainer,
  SimpleText,
  SocialLoginContainer,
  Label,
} from "./styles";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { SocialLoginButton } from "../../components/SocialLoginButton";
import FacebookSvg from "../../assets/facebook.svg";
import GoogleSvg from "../../assets/google.svg";
import EyeSvg from "../../assets/eye.svg";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

export const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Background>
          <Container>
            <Logo />
            <Form>
              <Heading>Sign up fro free</Heading>
              <Input
                label="Email*"
                placeholder="Email or Phone Number"
                icon={() => <View />}
              />
              <Input
                label="Password*"
                placeholder="Password"
                icon={EyeSvg}
                secureTextEntry
              />
              <RememberMe />
              <Button label="Sign up" />
              <Link label="Forgot the Password?" />
              <SimpleText>or continue with</SimpleText>
              <SocialLoginContainer>
                <SocialLoginButton icon={FacebookSvg} label="Facebook" />
                <SocialLoginButton icon={GoogleSvg} label="Google" />
              </SocialLoginContainer>
              <DontHaveAccountContainer>
                <Label>Already have an account?</Label>
                <Link label="Sign in" />
              </DontHaveAccountContainer>
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
