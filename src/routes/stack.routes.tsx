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

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
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
    </Navigator>
  );
};
