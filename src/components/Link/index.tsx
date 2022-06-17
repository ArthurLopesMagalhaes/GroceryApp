import { TouchableOpacityProps } from "react-native";
import { Container, Label } from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
};

export const Link = ({ label, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  );
};
