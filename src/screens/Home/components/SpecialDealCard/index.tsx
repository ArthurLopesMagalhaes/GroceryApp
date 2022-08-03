import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { Button, Image, InfoContainer, Label, styles, Title } from "./styles";

import AlfacePng from "../../../../assets/alface.png";

type Props = {
  onPress: () => void;
};

export const SpecialDealCard = ({ onPress }: Props) => {
  return (
    <LinearGradient colors={["#4FE58A", "#19C179"]} style={styles.card}>
      <Image source={AlfacePng} />
      <InfoContainer>
        <Title>Special Deal for December</Title>
        <Button onPress={onPress}>
          <Label>Buy Now</Label>
        </Button>
      </InfoContainer>
    </LinearGradient>
  );
};
