import { SvgProps } from "react-native-svg";
import { Container, styles, Time, Title } from "./styles";

export type StoreProps = {
  id: string;
  name: string;
  description?: string;
  rating?: number;
  icon: React.FC<SvgProps>;
};

type Props = StoreProps & {
  onPress: () => void;
};

export const GroceryCard = ({ name, icon: Icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon />
      <Title>{name}</Title>
      <Time>8 mins</Time>
    </Container>
  );
};
