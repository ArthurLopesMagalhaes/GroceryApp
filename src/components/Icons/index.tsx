import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Container } from "./styles";

type Props = {
  icon: React.FC<SvgProps>;
  onPress?: () => void;
};

export const Icons = ({ icon: Icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon width={17} height={17} />
    </Container>
  );
};
