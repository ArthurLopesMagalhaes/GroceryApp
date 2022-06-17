import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { Button, Image, InfoContainer, Label, styles, Title } from "./styles";

import AlfacePng from "../../../../assets/alface.png";

export const SpecialDealCard = () => {
  return (
    <LinearGradient colors={["#4FE58A", "#19C179"]} style={styles.card}>
      <Image source={AlfacePng} />
      <InfoContainer>
        <Title>Special Deal for December</Title>
        <Button>
          <Label>Buy Now</Label>
        </Button>
      </InfoContainer>
    </LinearGradient>
  );
};
