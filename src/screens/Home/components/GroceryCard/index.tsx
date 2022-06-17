import { SvgProps } from "react-native-svg";
import { Container, styles, Time, Title } from "./styles";
import { Shadow } from "react-native-shadow-2";

export type StoreProps = {
  id: string;
  name: string;
  time: number;
  icon: React.FC<SvgProps>;
};

export const GroceryCard = ({ id, name, time, icon: Icon }: StoreProps) => {
  return (
    <Container>
      <Icon />
      <Title>{name}</Title>
      <Time>{time} mins</Time>
    </Container>
  );
};