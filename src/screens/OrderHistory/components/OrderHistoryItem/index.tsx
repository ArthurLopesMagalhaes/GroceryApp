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
import { theme } from "../../../../global/theme";

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
      ? `${theme.colors.succcess}`
      : data.status === "canceled"
      ? `${theme.colors.warning}`
      : `${theme.colors.info}`;

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
        <StatusText>{data.status}</StatusText>
      </OrderStatus>
    </Container>
  );
};
