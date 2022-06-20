import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { SettingsItem } from "../../components/SettingsItem";
import { ScrollView } from "./styles";

import ProfileSvg from "../../assets/profile.svg";
import BellSvg from "../../assets/bell.svg";
import CreditCardSVG from "../../assets/credit-card.svg";
import ContactsSvg from "../../assets/contacts.svg";
import LockSvg from "../../assets/lock.svg";
import OtherSvg from "../../assets/other.svg";
import LogoutSvg from "../../assets/logout.svg";

import { Background } from "../../components/Background";
import { theme } from "../../global/theme";
import { useNavigation } from "@react-navigation/native";

export const Settings = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Header label="Settings" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SettingsItem label="Account" icon={ProfileSvg} />
          <SettingsItem
            label="Notification"
            icon={BellSvg}
            onPress={() => navigation.navigate("Notification")}
          />
          <SettingsItem label="My Card" icon={CreditCardSVG} />
          <SettingsItem label="Contacts" icon={ContactsSvg} />
          <SettingsItem label="Security" icon={LockSvg} />
          <SettingsItem label="Others" icon={OtherSvg} />
          <SettingsItem
            label="Logout"
            icon={LogoutSvg}
            bg={theme.colors.tertiary_2_100}
            hasArrow={false}
          />
        </ScrollView>
      </Container>
    </Background>
  );
};
