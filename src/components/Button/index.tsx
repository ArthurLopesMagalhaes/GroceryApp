import { Label, styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { RectButton } from "react-native-gesture-handler";

export const Button = () => {
  return (
    <RectButton style={styles.button}>
      <Label>Sign In</Label>
    </RectButton>
  );
};
