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
import { useEffect, useRef, useState } from "react";
import { MemberType } from "../Profile/components/MemberType";
import { ActivityIndicator, StatusBar, Text, View } from "react-native";
import { GroceryTag } from "./components/GroceryTag";
import { Icons } from "../../components/Icons";

import MarkerSvg from "../../assets/marker.svg";
import EmptyHeart from "../../assets/empty-heart.svg";
import HalfStartSvg from "../../assets/half-star.svg";
import { PopularStuff } from "../Home/components/PopularStuff";
import { ProductCard, ProductType } from "./components/ProductCard";
import {
  TestimonialCard,
  TestimonialsProps,
} from "../../components/TestimonialCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../services/api";

type RouteParams = {
  storeId: string;
};

type Store = {
  info: {
    description: string;
    id: number;
    name: string;
    rating: number;
    store_photo: string;
  };
  products: ProductType[];
  testimonials: TestimonialsProps[];
};

export const StoreHome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loadingInfos, setLoadingInfos] = useState(true);
  const [store, setStore] = useState<Store>({} as Store);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { storeId } = route.params as RouteParams;

  const goToStoreGroceries = () => {
    navigation.navigate("PopularGrocery");
  };
  const goToTestimonials = () => {
    navigation.navigate("Testimonials", { storeId: storeId });
  };

  useEffect(() => {
    // search store in DB by id
    const fetchStore = async () => {
      const response = await api.get(`/store/${storeId}`);
      setStore(response.data.store);
      setLoadingInfos(false);
      console.log("store.testimonials", store.testimonials);
    };
    fetchStore();
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
          {loadingInfos ? (
            <ActivityIndicator />
          ) : (
            <>
              <TagsContainer>
                <GroceryTag />
                <IconsContainer>
                  <Icons icon={MarkerSvg} />
                  <Icons icon={EmptyHeart} />
                </IconsContainer>
              </TagsContainer>
              <InfoContainer>
                <GroceryName>{store.info.name}</GroceryName>
                <DistanceRatingContainer>
                  <Icons icon={MarkerSvg} />
                  <IconText>3 km</IconText>
                  <Icons icon={HalfStartSvg} />
                  <IconText>{store.info.rating} rating</IconText>
                </DistanceRatingContainer>
                <GroceryDescription>
                  {store.info.description}
                </GroceryDescription>
              </InfoContainer>
              <PopularStuff
                title="Popular Grocery"
                subtitle="See all"
                onPress={goToStoreGroceries}
              />
              <View style={{ height: 200 }}>
                <BottomSheetFlatList
                  data={store.products}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <ProductCard data={item} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <PopularStuff
                title="Testimonials"
                subtitle="See all"
                onPress={goToTestimonials}
              />
              {store.testimonials.length > 0 ? (
                <TestimonialCard data={store.testimonials[0]} />
              ) : (
                <Text>No testimonials yet</Text>
              )}
            </>
          )}
        </ModalContainer>
      </BottomSheet>
    </Container>
  );
};
