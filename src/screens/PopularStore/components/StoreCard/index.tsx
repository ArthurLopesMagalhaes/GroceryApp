import { StoreProps } from "../../../Home/components/GroceryCard";
import { Container, Time, Title } from "./styles";

type Props = StoreProps & {
  onPress: () => void;
};

export const StoreCard = ({ id, name, time, icon: Icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon />
      <Title>{name}</Title>
      <Time>{time} mins</Time>
    </Container>
  );
};
