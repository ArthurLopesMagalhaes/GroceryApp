import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites } from "../screens/Favorite";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
const { Navigator, Screen } = createNativeStackNavigator();

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
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
