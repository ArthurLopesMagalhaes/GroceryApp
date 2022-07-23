import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
