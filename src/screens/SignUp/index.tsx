import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { RememberMe } from "../../components/RememberMe";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { SocialLoginButton } from "../../components/SocialLoginButton";
import { Container } from "../../components/Container";

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

export const SignUp = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const doSignUp = () => {
    navigation.navigate("FillBio");
  };

  const goToSignIn = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
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
              <Heading>Sign up fro free</Heading>
              <Input
                label="Email*"
                placeholder="Email or Phone Number"
                icon={() => <View />}
              />
              <Input
                label="Password*"
                placeholder="Password"
                icon={hidePassword ? EyeClosedSvg : EyeOpenedSvg}
                onPress={showPass}
                secureTextEntry={hidePassword}
              />
              <RememberMe />
              <Button label="Sign up" onPress={doSignUp} />
              <Link label="Forgot the Password?" />
              <SimpleText>or continue with</SimpleText>
              <SocialLoginContainer>
                <SocialLoginButton icon={FacebookSvg} label="Facebook" />
                <SocialLoginButton icon={GoogleSvg} label="Google" />
              </SocialLoginContainer>
              <DontHaveAccountContainer>
                <Label>Already have an account?</Label>
                <Link label="Sign in" onPress={goToSignIn} />
              </DontHaveAccountContainer>
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
