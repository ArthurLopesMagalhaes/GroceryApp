import { ButtonContainer, Label, styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { TouchableOpacity } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onPress}>
      <LinearGradient colors={["#4FE58A", "#19C179"]} style={styles.button}>
        <Label>{label}</Label>
      </LinearGradient>
    </ButtonContainer>
  );
};
