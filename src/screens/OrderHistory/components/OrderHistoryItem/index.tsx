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

export type OrderHistoryItemType = {
  store: string;
  product: string;
  price: number;
  status: "completed" | "process" | "canceled";
};

type Props = {
  data: OrderHistoryItemType;
};

export const OrderHistoryItem = ({ data }: Props) => {
  const orderBackground =
    data.status === "completed"
      ? "red"
      : data.status === "canceled"
      ? "blue"
      : "green";

  return (
    <Container>
      <ImgContainer>
        <Image source={AlfaceImg} resizeMode="cover" />
      </ImgContainer>
      <InfoContainer>
        <Product>{data.product}</Product>
        <Store>{data.store}</Store>
        <Price>${data.price}</Price>
      </InfoContainer>
      <OrderStatus bg={orderBackground}>
        <StatusText>Process</StatusText>
      </OrderStatus>
    </Container>
  );
};
