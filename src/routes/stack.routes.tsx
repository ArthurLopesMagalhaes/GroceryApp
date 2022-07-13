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
import { Profile } from "../screens/Profile";
import { Favorites } from "../screens/Favorite";
import { Settings } from "../screens/Settings";
import { Notification } from "../screens/Notification";
import { FindGrocery } from "../screens/FindGrocery";
import { Others } from "../screens/Others";
import { OrderDetails } from "../screens/OrderDetails";
import { OrderHistory } from "../screens/OrderHistory";

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Splash"
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
      <Screen name="OrderDetails" component={OrderDetails} />
      <Screen name="Settings" component={Settings} />
      <Screen name="FindGrocery" component={FindGrocery} />
      <Screen name="Notification" component={Notification} />
      <Screen name="Others" component={Others} />
      <Screen name="TabRoutes" component={TabRoutes} />
      {/* <Screen name="Favorites" component={Favorites} /> */}
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

export const OrderStackScreen = () => {
  return (
    <Navigator
      initialRouteName="OrderHistory"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="OrderHistory" component={OrderHistory} />
      <Screen name="OrderDetails" component={OrderDetails} />
    </Navigator>
  );
};

export const ProfileStackScreens = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};
