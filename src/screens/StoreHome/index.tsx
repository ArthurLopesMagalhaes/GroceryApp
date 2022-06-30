import {
  Container,
  ImageContainer,
  ModalContainer,
  TagsContainer,
  styles,
  IconText,
  IconsContainer,
  InfoContainer,
  GroceryName,
  GroceryDescription,
  DistanceRatingContainer,
} from "./styles";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import GroceryImg from "../../assets/grocery-photo.png";
import { useRef } from "react";
import { MemberType } from "../Profile/components/MemberType";
import { StatusBar, View } from "react-native";
import { GroceryTag } from "./components/GroceryTag";
import { Icons } from "../../components/Icons";

import MarkerSvg from "../../assets/marker.svg";
import EmptyHeart from "../../assets/empty-heart.svg";
import HalfStartSvg from "../../assets/half-star.svg";
import { PopularStuff } from "../Home/components/PopularStuff";
import { ProductCard } from "./components/ProductCard";
import { TestimonialCard } from "../../components/TestimonialCard";

const data = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

export const StoreHome = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageContainer source={GroceryImg} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["60%", "95%"]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <ModalContainer>
          <TagsContainer>
            <GroceryTag />
            <IconsContainer>
              <Icons icon={MarkerSvg} />
              <Icons icon={EmptyHeart} />
            </IconsContainer>
          </TagsContainer>
          <InfoContainer>
            <GroceryName>Lovy Grocery</GroceryName>
            <DistanceRatingContainer>
              <Icons icon={MarkerSvg} />
              <IconText>3 km</IconText>
              <Icons icon={HalfStartSvg} />
              <IconText>4.8 rating</IconText>
            </DistanceRatingContainer>
            <GroceryDescription>
              We are one of the best grocery in the city of Surabaya with years
              of experience. We serve a lot of quality fresh grocery directly by
              our farmers. Hope you like it!
            </GroceryDescription>
          </InfoContainer>
          <PopularStuff title="Popular Grocery" subtitle="See all" />
          <View style={{ height: 200 }}>
            <BottomSheetFlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProductCard />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <PopularStuff title="Testimonials" subtitle="See all" />
          <TestimonialCard />
        </ModalContainer>
      </BottomSheet>
    </Container>
  );
};
