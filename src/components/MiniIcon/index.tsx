import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  icon: React.FC<SvgProps>;
};

export const MiniIcon = ({ icon: Icon, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
};
