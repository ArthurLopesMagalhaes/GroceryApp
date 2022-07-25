import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Container } from "./styles";

type Props = {
  icon: React.FC<SvgProps>;
};

export const Icons = ({ icon: Icon, ...rest }: Props) => {
  return (
    <Container>
      <Icon width={17} height={17} />
    </Container>
  );
};
