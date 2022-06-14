import { Image } from "react-native";
import { Container } from "./styles";
import { SvgProps } from "react-native-svg";

type Props = {
  icon: React.FC<SvgProps>;
};

export const PaymentMethodItem = ({ icon: Icon }: Props) => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};
