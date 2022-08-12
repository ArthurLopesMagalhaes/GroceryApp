import { Container, Image, Name, Price } from "./styles";

import AlfaceImg from "../../../../assets/alface.png";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  product_photo: string;
};

type Props = {
  data: ProductType;
};

export const ProductCard = ({ data }: Props) => {
  return (
    <Container>
      <Image source={AlfaceImg} />
      <Name>{data.name}</Name>
      <Price>${data.price}</Price>
    </Container>
  );
};
