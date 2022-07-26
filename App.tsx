import { Provider } from "react-redux";

import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
} from "@expo-google-fonts/source-sans-pro";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MainRoutes } from "./src/routes";
import { Preload } from "./src/screens/Preload";
import { store } from "./src/redux/store";

function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Preload />;
  }

  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <MainRoutes />
    </Provider>
  );
}

export default gestureHandlerRootHOC(App);
