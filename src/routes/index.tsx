import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { AppRoutes } from "./app.routes";
import { AuthStack } from "./AuthStack";

export const MainRoutes = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <NavigationContainer>
      {user.token ? <AppRoutes /> : <AuthStack />}
    </NavigationContainer>
  );
};
