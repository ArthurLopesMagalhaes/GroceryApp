import { StoreProps } from "../../../Home/components/GroceryCard";
import { Container, Time, Title } from "./styles";

export const StoreCard = ({ id, name, time, icon: Icon }: StoreProps) => {
  return (
    <Container>
      <Icon />
      <Title>{name}</Title>
      <Time>{time} mins</Time>
    </Container>
  );
};
