import { Background } from "../../components/Background";
import { RememberMe } from "../../components/RememberMe";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
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
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();

  const doSignUp = (data: FormData) => {
    console.log(data);
    navigation.navigate("FillBio");
  };

  const goToSignIn = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  const toggleShowPass = () => {
    setHidePassword((prevState) => !prevState);
  };

  const { control, handleSubmit } = useForm<FormData>();

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
                name="email"
                control={control}
                rules={{
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
                onPress={toggleShowPass}
                secureTextEntry={hidePassword}
              />
              <RememberMe />
              <Button label="Sign up" onPress={handleSubmit(doSignUp)} />
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
