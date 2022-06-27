import {
  Button,
  ButtonText,
  Container,
  LineContent,
  LineDivider,
  Price,
  Title,
} from "./styles";

export const SummaryCard = () => {
  return (
    <Container>
      <LineContent>
        <Title>Subtotal</Title>
        <Price>$32</Price>
      </LineContent>
      <LineContent>
        <Title>Delivery charge</Title>
        <Price>$5</Price>
      </LineContent>
      <LineContent>
        <Title>Discount</Title>
        <Price>$10</Price>
      </LineContent>
      <LineDivider />
      <LineContent>
        <Title>Total</Title>
        <Price>$27</Price>
      </LineContent>
      <Button activeOpacity={0.7}>
        <ButtonText>Place my order</ButtonText>
      </Button>
    </Container>
  );
};
