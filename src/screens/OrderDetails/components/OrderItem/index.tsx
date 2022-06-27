import {
  AmountContainer,
  AmountNumber,
  Container,
  Image,
  ImgContainer,
  InfoContainer,
  MinusButton,
  PlusButton,
  Price,
  Product,
  Store,
  TrashButton,
  ViewTrash,
} from "./styles";

import MinusSvg from "../../../../assets/minus.svg";
import PlusSvg from "../../../../assets/plus.svg";

import AlfaceImg from "../../../../assets/alface.png";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import TrashSvg from "../../../../assets/trash.svg";

const renderRightActions = (progress: any, dragX: any) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });
  return (
    <ViewTrash>
      <TrashButton>
        <TrashSvg width={16} height={16} />
      </TrashButton>
    </ViewTrash>
  );
};

export const OrderItem = () => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Container>
        <ImgContainer>
          <Image source={AlfaceImg} resizeMode="cover" />
        </ImgContainer>
        <InfoContainer>
          <Product>Fresh Cabbage</Product>
          <Store>Lovy Grocery</Store>
          <Price>$10</Price>
        </InfoContainer>
        <AmountContainer>
          <MinusButton>
            <MinusSvg />
          </MinusButton>
          <AmountNumber>1</AmountNumber>
          <PlusButton>
            <PlusSvg />
          </PlusButton>
        </AmountContainer>
      </Container>
    </Swipeable>
  );
};
