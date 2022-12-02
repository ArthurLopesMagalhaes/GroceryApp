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
import { useEffect, useRef, useState } from "react";
import { MemberType } from "../Profile/components/MemberType";
import { ActivityIndicator, StatusBar, View } from "react-native";

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
import { api } from "../../services/api";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useAppSelector";
import { setProduct } from "../../redux/reducers/cartReducer";

type RouteParams = {
  groceryId: string;
};

type Product = {
  description: string;
  id: number;
  name: string;
  rating: number;
  store_photo: string;
};

export const GroceryDetails = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const route = useRoute();
  const [loadingInfos, setLoadingInfos] = useState(true);
  const [grocery, setGrocery] = useState<Product>({} as Product);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { groceryId } = route.params as RouteParams;

  const goToStoreGroceries = () => {
    navigation.navigate("PopularGrocery");
  };
  const goToTestimonials = () => {
    navigation.navigate("Testimonials", { productId: "adsdas" });
  };

  const addItemToCart = () => {
    dispatch(setProduct(grocery.id));
  };

  useEffect(() => {
    // search store in DB by id
    const fetchStore = async () => {
      const response = await api.get(`/product/${groceryId}`);
      setGrocery(response.data.product);
      setLoadingInfos(false);
    };
    fetchStore();
  }, [groceryId]);

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
                  <GroceryName>{grocery.name}</GroceryName>
                  <DistanceRatingContainer>
                    <Icons icon={MarkerSvg} />
                    <IconText>3 km</IconText>
                    <Icons icon={HalfStartSvg} />
                    <IconText>{grocery.rating} rating</IconText>
                  </DistanceRatingContainer>
                  <GroceryDescription>{grocery.description}</GroceryDescription>
                </InfoContainer>

                <PopularStuff
                  title="Testimonials"
                  subtitle="See all"
                  onPress={goToTestimonials}
                />
                {/* <TestimonialCard data={} /> */}
              </>
            )}
          </ModalContainer>
        </BottomSheet>
      </Container>
      <BoxButton>
        <Button label="Add to cart" onPress={() => addItemToCart} />
      </BoxButton>
    </>
  );
};
