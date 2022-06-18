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
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  image: any;
  product: string;
  store: string;
  price: number;
};

export const Favorite = ({ image, price, product, store, ...rest }: Props) => {
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

      <HeartButton {...rest}>
        <HeartSvg />
      </HeartButton>
    </Container>
  );
};
