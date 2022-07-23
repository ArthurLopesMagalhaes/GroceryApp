import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderDetails } from "../screens/OrderDetails";
import { OrderHistory } from "../screens/OrderHistory";
const { Navigator, Screen } = createNativeStackNavigator();

export const OrderStackScreens = () => {
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
