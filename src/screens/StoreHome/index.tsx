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
import { useEffect, useRef } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";

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

export const StoreHome = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { storeId } = route.params as RouteParams;

  const goToStoreGroceries = () => {
    navigation.navigate("PopularGrocery");
  };
  const goToTestimonials = () => {
    navigation.navigate("Testimonials");
  };

  useEffect(() => {
    // search store in DB by id
  }, [storeId]);

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
          <PopularStuff
            title="Popular Grocery"
            subtitle="See all"
            onPress={goToStoreGroceries}
          />
          <View style={{ height: 200 }}>
            <BottomSheetFlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProductCard />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <PopularStuff
            title="Testimonials"
            subtitle="See all"
            onPress={goToTestimonials}
          />
          <TestimonialCard data={test} />
        </ModalContainer>
      </BottomSheet>
    </Container>
  );
};
