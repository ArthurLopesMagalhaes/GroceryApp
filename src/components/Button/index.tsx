import { Label, styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <RectButton style={styles.button} onPress={onPress}>
      <LinearGradient colors={["#4FE58A", "#19C179"]} style={styles.button}>
        <Label>{label}</Label>
      </LinearGradient>
    </RectButton>
  );
};
