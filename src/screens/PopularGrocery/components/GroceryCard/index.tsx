import { StoreProps } from "../../../Home/components/GroceryCard";
import {
  Container,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Store,
  Title,
} from "./styles";

type Props = {
  image: any;
  product: string;
  store: string;
  price: number;
};

export const GroceryCard = ({ image, price, product, store }: Props) => {
  return (
    <Container>
      <ImgContainer>
        <Image source={image} />
      </ImgContainer>
      <InfoContainer>
        <Title>{product}</Title>
        <Store>{store}</Store>
      </InfoContainer>
      <Price>${price}</Price>
    </Container>
  );
};
