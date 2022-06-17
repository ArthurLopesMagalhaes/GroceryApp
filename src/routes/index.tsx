import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
