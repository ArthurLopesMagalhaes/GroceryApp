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

import { theme } from "../../../../global/theme";

export type OrderHistoryItemType = {
  id: number;
  status: "completed" | "process" | "canceled";
  price: number;
  products: {
    name: string;
    product_photo: string;
    stores: {
      name: string;
    };
  }[];
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
        <Image
          source={{ uri: data.products[0].product_photo }}
          resizeMode="cover"
        />
      </ImgContainer>
      <InfoContainer>
        <Product>{data.products[0].name}</Product>
        <Store>{data.products[0].stores.name}</Store>
        <Price>${data.price}</Price>
      </InfoContainer>
      <OrderStatus bg={orderBackground}>
        <StatusText>{data.status}</StatusText>
      </OrderStatus>
    </Container>
  );
};
