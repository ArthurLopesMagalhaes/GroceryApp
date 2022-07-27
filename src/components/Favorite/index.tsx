import {
  Container,
  HeartButton,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Store,
  Title,
} from "./styles";

import HeartSvg from "../../assets/heart_favorite.svg";

type Props = {
  image: any;
  product: string;
  store: string;
  price: number;
  onPress: () => void;
};

export const Favorite = ({ image, price, product, store, onPress }: Props) => {
  return (
    <Container>
      <ImgContainer>
        <Image source={image} />
      </ImgContainer>
      <InfoContainer>
        <Title>{product}</Title>
        <Store>{store}</Store>
        <Price>${price}</Price>
      </InfoContainer>
      <HeartButton onPress={onPress}>
        <HeartSvg />
      </HeartButton>
    </Container>
  );
};
