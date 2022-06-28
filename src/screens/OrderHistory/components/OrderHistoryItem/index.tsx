import {
  Container,
  Image,
  ImgContainer,
  InfoContainer,
  OrderStatus,
  Price,
  Product,
  StatusText,
  Store,
} from "./styles";

import AlfaceImg from "../../../../assets/alface.png";

export const OrderHistoryItem = () => {
  return (
    <Container>
      <ImgContainer>
        <Image source={AlfaceImg} resizeMode="cover" />
      </ImgContainer>
      <InfoContainer>
        <Product>Fresh Cabbage</Product>
        <Store>Lovy Grocery</Store>
        <Price>$10</Price>
      </InfoContainer>
      <OrderStatus>
        <StatusText>Process</StatusText>
      </OrderStatus>
    </Container>
  );
};
