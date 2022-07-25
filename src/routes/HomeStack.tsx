import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { PopularGrocery } from "../screens/PopularGrocery";
import { PopularStore } from "../screens/PopularStore";
import { StoreHome } from "../screens/StoreHome";

const { Navigator, Screen } = createNativeStackNavigator();

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
