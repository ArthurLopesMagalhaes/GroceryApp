import { Label, styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
    <RectButton style={styles.button}>
      <Label>{label}</Label>
    </RectButton>
  );
};
