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
  BoxButton,
} from "./styles";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import GroceryImg from "../../assets/GroceryDetails.png";
import { useEffect, useRef } from "react";
import { MemberType } from "../Profile/components/MemberType";
import { StatusBar, View } from "react-native";

import { Icons } from "../../components/Icons";

import MarkerSvg from "../../assets/marker.svg";
import EmptyHeart from "../../assets/empty-heart.svg";
import HalfStartSvg from "../../assets/half-star.svg";
import { PopularStuff } from "../Home/components/PopularStuff";

import { TestimonialCard } from "../../components/TestimonialCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductCard } from "../StoreHome/components/ProductCard";
import { GroceryTag } from "../StoreHome/components/GroceryTag";
import { Button } from "../../components/Button";

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

const test = {
  author: "string",
  date: "string",
  comment: "string",
  rating: 5,
};

type RouteParams = {
  storeId: string;
};

export const GroceryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { storeId } = route.params as RouteParams;

  const goToStoreGroceries = () => {
    navigation.navigate("PopularGrocery");
  };
  const goToTestimonials = () => {
    navigation.navigate("Testimonials", { productId: "adsdas" });
  };

  useEffect(() => {
    // search store in DB by id
  }, [storeId]);

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageContainer source={GroceryImg} />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["40%", "75%"]}
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
              <GroceryName>Fresh Cabbage</GroceryName>
              <DistanceRatingContainer>
                <Icons icon={MarkerSvg} />
                <IconText>3 km</IconText>
                <Icons icon={HalfStartSvg} />
                <IconText>4.8 rating</IconText>
              </DistanceRatingContainer>
              <GroceryDescription>
                Quality fresh cabbage directly harvested from our garden by
                professional growers. Cabbage aged 3 months with very intensive
                care so that the cabbage has a dense and fresh texture.
              </GroceryDescription>
            </InfoContainer>

            <PopularStuff
              title="Testimonials"
              subtitle="See all"
              onPress={goToTestimonials}
            />
            <TestimonialCard data={test} />
          </ModalContainer>
        </BottomSheet>
      </Container>
      <BoxButton>
        <Button label="Add to chart" onPress={() => null} />
      </BoxButton>
    </>
  );
};
