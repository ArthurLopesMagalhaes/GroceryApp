import { SvgProps } from "react-native-svg";
import {
  Container,
  IconContainer,
  InputContainer,
  InputField,
  Label,
  styles,
} from "./styles";

import { TextInputProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../global/theme";

type Props = TextInputProps & {
  label: string;
  icon: React.FC<SvgProps>;
  onPress?: () => void;
};

export const Input = ({ label, icon: Icon, onPress, ...rest }: Props) => {
  return (
    <Container style={styles.shadow}>
      <Label>{label}</Label>
      <InputContainer>
        <InputField {...rest} placeholderTextColor={theme.colors.neutral_7} />
        <IconContainer onPress={onPress}>
          <Icon width={24} height={24} />
        </IconContainer>
      </InputContainer>
    </Container>
  );
};
