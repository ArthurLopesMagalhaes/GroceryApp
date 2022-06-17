import { Label, styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
  label: string;
};

export const Button = ({ label, ...rest }: Props) => {
  return (
    <RectButton {...rest} style={styles.button}>
      <Label>{label}</Label>
    </RectButton>
  );
};
