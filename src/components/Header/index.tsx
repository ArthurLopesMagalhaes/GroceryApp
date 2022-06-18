import { ArrowContainer, Container, Label } from "./styles";
import ArrowLeftSvg from "../../assets/arrowleft.svg";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
};

export const Header = ({ label, ...rest }: Props) => {
  return (
    <Container>
      <ArrowContainer {...rest}>
        <ArrowLeftSvg />
      </ArrowContainer>
      <Label>{label}</Label>
    </Container>
  );
};
