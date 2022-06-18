import { SvgProps } from "react-native-svg";
import { Container, styles, Time, Title } from "./styles";
import { Shadow } from "react-native-shadow-2";
import { TouchableOpacityProps } from "react-native";

export type StoreProps = TouchableOpacityProps & {
  id: string;
  name: string;
  time: number;
  icon: React.FC<SvgProps>;
};

export const GroceryCard = ({
  id,
  name,
  time,
  icon: Icon,
  ...rest
}: StoreProps) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{name}</Title>
      <Time>{time} mins</Time>
    </Container>
  );
};
