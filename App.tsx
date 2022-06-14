import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
} from "@expo-google-fonts/source-sans-pro";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Congrats } from "./src/screens/Congrats";
import { FillBio } from "./src/screens/FillBio";
import { PaymentMenthod } from "./src/screens/PaymentMethod";
import { SetLocation } from "./src/screens/SetLocation";

import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { UploadPhoto } from "./src/screens/UploadPhoto";

export default function App() {
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
        translucent={true}
      />
      <Congrats />
    </>
  );
}
