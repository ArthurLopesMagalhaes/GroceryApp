import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FillBio } from "../screens/FillBio";
import { ForgotPassword } from "../screens/ForgotPassword";
import { PaymentMethod } from "../screens/PaymentMethod";
import { SetLocation } from "../screens/SetLocation";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { UploadPhoto } from "../screens/UploadPhoto";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="FillBio" component={FillBio} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
