import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { MemberType } from "./components/MemberType/index";
import { Icons } from "../../components/Icons";

import {
  Container,
  ContainerScreen,
  Email,
  Header,
  IconsContainer,
  ImageContainer,
  InfoContainer,
  Name,
  styles,
} from "./styles";

import ConfigSvg from "../../assets/config.svg";
import EditSvg from "../../assets/edit_button.svg";
import { PopularStuff } from "../Home/components/PopularStuff";
import { Voucher } from "./components/Voucher";
import { Favorite } from "../../components/Favorite";

import CabbageImg from "../../assets/cabbage.png";
import ProfilePicture from "../../assets/profile-picture.png";
import { useNavigation } from "@react-navigation/native";
import { Alert, TouchableOpacity } from "react-native";

export const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  const goToFavorites = () => {
    navigation.navigate("Favorites");
  };

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <ContainerScreen>
      <ImageContainer source={ProfilePicture} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["60%", "85%"]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Container>
          <MemberType />
          <Header>
            <InfoContainer>
              <Name>Daniel Sebastian</Name>
              <Email>daniel.sebastian@yourdomain.com</Email>
            </InfoContainer>
            <IconsContainer>
              <Icons icon={EditSvg} />
              <Icons icon={ConfigSvg} onPress={goToSettings} />
            </IconsContainer>
          </Header>
          <Voucher />
          <PopularStuff
            title="Favorite"
            subtitle="See all"
            onPress={goToFavorites}
          />
          <Favorite
            image={CabbageImg}
            product="Fresh Lettuce"
            store="Lovy Grocery"
            price={8}
          />
          <Favorite
            image={CabbageImg}
            product="Fresh Lettuce"
            store="Lovy Grocery"
            price={8}
          />
        </Container>
      </BottomSheet>
    </ContainerScreen>
  );
};
