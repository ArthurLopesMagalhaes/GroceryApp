import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as AuthSession from "expo-auth-session";

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
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useAppSelector";
import { setAvatar, setEmail, setName } from "../../redux/reducers/userReducer";

type FormData = {
  email: string;
  password: string;
};

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

type ResponseDataProps = {
  name: string;
  email: string;
  picture: string;
};

const schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const SignIn = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [hidePassword, setHidePassword] = useState(true);

  const doSignIn = () => {
    navigation.navigate("SignUp");
  };

  const goToSignUp = () => {
    navigation.navigate("TabRoutes");
  };
  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const showPass = () => {
    setHidePassword((prevState) => !prevState);
  };

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID =
        "986851395794-snrjsu5bgr8qums0pocqr48c5cnsa6e4.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@xarthurlm/groceryapp";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const responseData: ResponseDataProps = await response.json();
        dispatch(setAvatar(responseData.picture));
        dispatch(setName(responseData.name));
        dispatch(setEmail(responseData.email));
        navigation.navigate("TabRoutes");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
                control={control}
                name="email"
                keyboardType="email-address"
              />
              <Input
                label="Password*"
                placeholder="Password"
                icon={hidePassword ? EyeClosedSvg : EyeOpenedSvg}
                secureTextEntry={hidePassword}
                onPress={showPass}
                control={control}
                name="password"
              />
              <RememberMe />

              <Button label="Sign in" onPress={handleSubmit(doSignIn)} />
              <Link label="Forgot the Password?" onPress={goToForgotPassword} />
              <SimpleText>or continue with</SimpleText>
              <SocialLoginContainer>
                <SocialLoginButton
                  icon={FacebookSvg}
                  label="Facebook"
                  onPress={handleGoogleSignIn}
                />
                <SocialLoginButton
                  icon={GoogleSvg}
                  label="Google"
                  onPress={handleGoogleSignIn}
                />
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
