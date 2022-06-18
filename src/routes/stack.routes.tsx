import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SplashScreen } from "../screens/SplashScreen";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { FillBio } from "../screens/FillBio";
import { PaymentMethod } from "../screens/PaymentMethod";
import { UploadPhoto } from "../screens/UploadPhoto";
import { SetLocation } from "../screens/SetLocation";
import { Congrats } from "../screens/Congrats";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Home } from "../screens/Home";
import { PopularStore } from "../screens/PopularStore";
import { TabRoutes } from "./tab.routes";
import { PopularGrocery } from "../screens/PopularGrocery";

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="FillBio" component={FillBio} />
      <Screen name="PaymentMethod" component={PaymentMethod} />
      <Screen name="UploadPhoto" component={UploadPhoto} />
      <Screen name="SetLocation" component={SetLocation} />
      <Screen name="Congrats" component={Congrats} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="TabRoutes" component={TabRoutes} />
    </Navigator>
  );
};

export const HomeStackScreens = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="PopularStore" component={PopularStore} />
      <Screen name="PopularGrocery" component={PopularGrocery} />
    </Navigator>
  );
};
