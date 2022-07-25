import { SvgProps } from "react-native-svg";
import { Container, styles, Time, Title } from "./styles";
import { Shadow } from "react-native-shadow-2";
import { TouchableOpacityProps } from "react-native";

export type StoreProps = {
  id: string;
  name: string;
  time: number;
  icon: React.FC<SvgProps>;
};

type Props = StoreProps & {
  onPress: () => void;
};

export const GroceryCard = ({ id, name, time, icon: Icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon />
      <Title>{name}</Title>
      <Time>{time} mins</Time>
    </Container>
  );
};
