import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../screens/Home";
import { Order } from "../screens/Order";
import { Chat } from "../screens/Chat";
import { Profile } from "../screens/Profile";
import { CustomTabBar } from "../components/CustomTabBar";
import { StyleSheet, Text, View } from "react-native";

import HomeSvg from "../assets/home.svg";
import OrderSvg from "../assets/cart.svg";
import ChatSvg from "../assets/chat.svg";
import ProfileSvg from "../assets/profile.svg";

import { theme } from "../global/theme";
import { HomeStackScreens } from "./stack.routes";

export const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: 91,
          bottom: 24,
          right: 24,
          left: 24,
          borderRadius: 24,
          paddingHorizontal: 24,
          elevation: 50,
        },
      }}
      // tabBar={() => <CustomTabBar/>}
    >
      <Screen
        name="HomeStackScreens"
        component={HomeStackScreens}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabBarItem}>
                <HomeSvg />
                <Text style={styles.tabBarLabel}>Home</Text>
              </View>
            ) : (
              <HomeSvg />
            ),
        }}
      />
      <Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabBarItem}>
                <OrderSvg />
                <Text style={styles.tabBarLabel}>Order</Text>
              </View>
            ) : (
              <OrderSvg />
            ),
        }}
      />
      <Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabBarItem}>
                <ChatSvg />
                <Text style={styles.tabBarLabel}>Chat</Text>
              </View>
            ) : (
              <ChatSvg />
            ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabBarItem}>
                <ProfileSvg />
                <Text style={styles.tabBarLabel}>Profile</Text>
              </View>
            ) : (
              <ProfileSvg />
            ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flexDirection: "row",
    height: 43,
    borderRadius: 12,
    backgroundColor: theme.colors.primary100,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  tabBarLabel: {
    fontFamily: theme.fonts.semibold,
    fontSize: 18,
    color: theme.colors.primary,
    marginLeft: 12,
  },
});
