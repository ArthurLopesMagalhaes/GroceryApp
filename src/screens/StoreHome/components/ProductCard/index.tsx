import { Container, Image, Name, Price } from "./styles";

import AlfaceImg from "../../../../assets/alface.png";

export const ProductCard = () => {
  return (
    <Container>
      <Image source={AlfaceImg} />
      <Name>Cabbage</Name>
      <Price>$10</Price>
    </Container>
  );
};
