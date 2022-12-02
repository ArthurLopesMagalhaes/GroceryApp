import { StoreProps } from "../../../Home/components/GroceryCard";
import { Container, Time, Title } from "./styles";
import HatyGrocery from "../../../../assets/haty-grocery.svg";

type Props = StoreProps & {
  onPress: () => void;
};

export const StoreCard = ({
  id,
  name,
  icon: Icon = HatyGrocery,
  onPress,
}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon />
      <Title>{name}</Title>
      <Time>{7} mins</Time>
    </Container>
  );
};
