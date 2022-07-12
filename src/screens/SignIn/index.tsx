import { Background } from "../../components/Background";
import { RememberMe } from "../../components/RememberMe";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container } from "../../components/Container";

import {
  // Container,
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
import EyeClosedSvg from "../../assets/closed-eye.svg";
import EyeOpenedSvg from "../../assets/opened-eye.svg";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();

  const doSignIn = (data: FormData) => {
    navigation.navigate("SignUp");
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const toggleShowPass = () => {
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
                name="email"
                control={control}
                rules={{
                  required: "Type your email",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email",
                  },
                }}
                label="Email*"
                placeholder="Email or Phone Number"
                icon={() => <View />}
              />

              <Input
                name="password"
                control={control}
                rules={{ required: "Type your password" }}
                label="Password*"
                placeholder="Password"
                icon={hidePassword ? EyeClosedSvg : EyeOpenedSvg}
                secureTextEntry={hidePassword}
                onPress={toggleShowPass}
              />

              <RememberMe />
              <Button label="Sign in" onPress={handleSubmit(doSignIn)} />
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
