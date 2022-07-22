import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { Background } from "../../components/Background";
import { RememberMe } from "../../components/RememberMe";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { SocialLoginButton } from "../../components/SocialLoginButton";

import {
  Heading,
  Form,
  DontHaveAccountContainer,
  SimpleText,
  SocialLoginContainer,
  Label,
} from "./styles";
import FacebookSvg from "../../assets/facebook.svg";
import GoogleSvg from "../../assets/google.svg";
import EyeClosedSvg from "../../assets/closed-eye.svg";
import EyeOpenedSvg from "../../assets/opened-eye.svg";

export const SignIn = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const doSignIn = () => {
    navigation.navigate("SignUp");
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const showPass = () => {
    setHidePassword((prevState) => !prevState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Background>
          <Container>
            <Logo />
            <Form>
              <Heading>Sign to your account</Heading>
              <Input
                label="Email*"
                placeholder="Email or Phone Number"
                icon={() => <View />}
              />
              <Input
                label="Password*"
                placeholder="Password"
                icon={hidePassword ? EyeClosedSvg : EyeOpenedSvg}
                secureTextEntry={hidePassword}
                onPress={showPass}
              />
              <RememberMe />
              <Button label="Sign in" onPress={doSignIn} />
              <Link label="Forgot the Password?" onPress={goToForgotPassword} />
              <SimpleText>or continue with</SimpleText>
              <SocialLoginContainer>
                <SocialLoginButton icon={FacebookSvg} label="Facebook" />
                <SocialLoginButton icon={GoogleSvg} label="Google" />
              </SocialLoginContainer>
              <DontHaveAccountContainer>
                <Label>Don't have an account?</Label>
                <Link label="Sign up" onPress={goToSignUp} />
              </DontHaveAccountContainer>
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
