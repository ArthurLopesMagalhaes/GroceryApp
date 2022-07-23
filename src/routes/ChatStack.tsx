import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat } from "../screens/Chat";
const { Navigator, Screen } = createNativeStackNavigator();

export const ChatStackScreens = () => {
  return (
    <Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
};
