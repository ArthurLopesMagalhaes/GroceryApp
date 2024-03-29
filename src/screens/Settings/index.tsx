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
import { Modal } from "../../components/Modal";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useAppSelector";
import {
  setAge,
  setAvatar,
  setEmail,
  setName,
  setToken,
} from "../../redux/reducers/userReducer";

export const Settings = () => {
  const user = useAppSelector((state) => state.user);
  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const logoutModal = () => {
    bottomSheetRef.current?.expand();
  };
  const closeModal = () => {
    bottomSheetRef.current?.close();
  };
  const handleLogout = () => {
    dispatch(setEmail(""));
    dispatch(setName(""));
    dispatch(setAge(0));
    dispatch(setAvatar(""));
    dispatch(setToken(""));
  };

  return (
    <Background>
      <Container>
        <Header label="Settings" onPress={() => navigation.goBack()} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <SettingsItem label="Account" icon={ProfileSvg} />
          <SettingsItem
            label="Notification"
            icon={BellSvg}
            onPress={() => navigation.navigate("Notification")}
          />
          <SettingsItem label="My Card" icon={CreditCardSVG} />
          <SettingsItem label="Contacts" icon={ContactsSvg} />
          <SettingsItem label="Security" icon={LockSvg} />
          <SettingsItem
            label="Others"
            icon={OtherSvg}
            onPress={() => navigation.navigate("Others")}
          />
          <SettingsItem
            label="Logout"
            icon={LogoutSvg}
            bg={theme.colors.tertiary_2_100}
            hasArrow={false}
            onPress={logoutModal}
          />
        </ScrollView>
      </Container>
      <Modal
        title="Are you sure want to logout?"
        cancelText="Cancel"
        doItText="Yes, logout"
        icon={LogoutSvg}
        ref={bottomSheetRef}
        onCancelPress={closeModal}
        onConfirmedPress={handleLogout}
      />
    </Background>
  );
};
