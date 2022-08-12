import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "./AuthStack";
import { TabRoutes } from "./tab.routes";
import { Congrats } from "../screens/Congrats";
import { OrderDetails } from "../screens/OrderDetails";
import { Settings } from "../screens/Settings";
import { Notification } from "../screens/Notification";
import { FindGrocery } from "../screens/FindGrocery";
import { Others } from "../screens/Others";
import { StoreHome } from "../screens/StoreHome";
import { Testimonials } from "../screens/Testimonials";
import { GroceryDetails } from "../screens/GroceryDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="AuthStack" component={AuthStack} />
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="OrderDetails" component={OrderDetails} />
      <Screen name="FindGrocery" component={FindGrocery} />
      <Screen name="Notification" component={Notification} />
      <Screen name="Others" component={Others} />
      <Screen name="StoreHome" component={StoreHome} />
      <Screen name="GroceryDetails" component={GroceryDetails} />
      <Screen name="Testimonials" component={Testimonials} />
    </Navigator>
  );
};
