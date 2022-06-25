import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
} from "@expo-google-fonts/source-sans-pro";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MainRoutes } from "./src/routes";
import { Congrats } from "./src/screens/Congrats";
import { FillBio } from "./src/screens/FillBio";
import { ForgotPassword } from "./src/screens/ForgotPassword";
import { Home } from "./src/screens/Home";
import { PopularStore } from "./src/screens/PopularStore";

import { ResetPassword } from "./src/screens/ResetPassword";
import { SetLocation } from "./src/screens/SetLocation";

import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { SplashScreen } from "./src/screens/SplashScreen";
import { UploadPhoto } from "./src/screens/UploadPhoto";

function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <MainRoutes />
    </>
  );
}

export default gestureHandlerRootHOC(App);
