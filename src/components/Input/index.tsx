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

type Props = TextInputProps & {
  label: string;

  icon: React.FC<SvgProps>;
};

export const Input = ({ label, icon: Icon, ...rest }: Props) => {
  return (
    <Container style={styles.shadow}>
      <Label>{label}</Label>
      <InputContainer>
        <InputField {...rest} />
        <IconContainer>
          <TouchableOpacity>
            <Icon width={24} height={24} />
          </TouchableOpacity>
        </IconContainer>
      </InputContainer>
    </Container>
  );
};
