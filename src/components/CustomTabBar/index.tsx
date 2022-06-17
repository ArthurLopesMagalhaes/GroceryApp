import { Container, IconContainer, MenuLabel, styles } from "./styles";
import { Shadow } from "react-native-shadow-2";

import HomeSvg from "../../assets/home.svg";
import CartSvg from "../../assets/cart.svg";
import ChatSvg from "../../assets/chat.svg";
import ProfileSvg from "../../assets/profile.svg";
import { useNavigation } from "@react-navigation/native";

export const CustomTabBar = () => {
  const navigation = useNavigation();

  return (
    <Shadow
      getChildRadius={false}
      viewStyle={styles.shadow}
      startColor="#5A6CEA14"
      distance={50}
    >
      <IconContainer onPress={() => navigation.navigate("Profile")}>
        <HomeSvg />
        <MenuLabel>Home</MenuLabel>
      </IconContainer>
      <CartSvg />
      <ChatSvg />
      <ProfileSvg />
    </Shadow>
  );
};

// box-shadow: 0px 0px 50px 0px #5A6CEA14;
