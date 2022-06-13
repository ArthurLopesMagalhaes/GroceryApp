import { SvgProps } from "react-native-svg";
import {
  Container,
  IconContainer,
  InputContainer,
  InputField,
  Label,
  styles,
} from "./styles";

type Props = {
  label: string;
  placeholder: string;
  icon: React.FC<SvgProps>;
};

export const Input = ({ label, placeholder, icon: Icon }: Props) => {
  return (
    <Container style={styles.shadow}>
      <Label>{label}</Label>
      <InputContainer>
        <InputField placeholder={placeholder} />
        <IconContainer>
          <Icon width={24} height={24} />
        </IconContainer>
      </InputContainer>
    </Container>
  );
};
