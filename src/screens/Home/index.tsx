import { ActivityIndicator, FlatList, Text } from "react-native";

import { Container } from "../../components/Container";
import { Background } from "../../components/Background";
import {
  ScrollView,
  Greeting,
  IconsContainer,
  Left,
  Logo,
  NavContainer,
} from "./styles";

import LogoImg from "../../assets/logo.png";
import { MiniIcon } from "../../components/MiniIcon";

import BellSvg from "../../assets/bell.svg";
import HeartSvg from "../../assets/heart.svg";
import { InputMenu } from "../../components/InputMenu";
import { SpecialDealCard } from "./components/SpecialDealCard";
import { PopularStuff } from "./components/PopularStuff";
import { GroceryCard, StoreProps } from "./components/GroceryCard";

import LovyGrocerySvg from "../../assets/lovy-grocery.svg";
import { CustomTabBar } from "../../components/CustomTabBar";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export const Home = () => {
  const user = useAppSelector((state) => state.user);
  const [stores, setStores] = useState<StoreProps[]>([]);
  const [products, setProducts] = useState<StoreProps[]>([]);

  const navigation = useNavigation();

  const goToFavorites = () => {
    // navigation.reset({
    //   routes: [
    //     { name: "ProfileStackScreens", params: { screen: "Favorites" } },
    //   ],
    // });
    navigation.navigate("ProfileStackScreens", { screen: "Favorites" });
  };
  const goToPopularStore = () => {
    navigation.navigate("PopularStore");
  };
  const goToPopularGrocery = () => {
    navigation.navigate("PopularGrocery");
  };

  const goToStoreScreen = (id: string) => {
    navigation.navigate("StoreHome", { storeId: id });
  };
  const goToGroceryScreen = (id: string) => {
    navigation.navigate("GroceryDetails", { groceryId: id });
  };

  async function test() {
    const response = await api.get("/ping");
    console.log(response.data);
  }

  useEffect(() => {
    const fetchStores = async () => {
      const response = await api.get("/stores");
      setStores(response.data.stores);
    };
    const fetchProducts = async () => {
      const response = await api.get(`/store/${1}/products`);
      setProducts(response.data.products);
    };

    fetchStores();
    fetchProducts();
  }, []);

  return (
    <Background>
      <Container>
        <NavContainer>
          <Left>
            <Logo source={LogoImg} />
            <Greeting>Hello, {user.name.split(" ")[0]}!</Greeting>
          </Left>
          <IconsContainer>
            <MiniIcon icon={BellSvg} />
            <MiniIcon icon={HeartSvg} onPress={goToFavorites} />
          </IconsContainer>
        </NavContainer>
        <InputMenu />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <SpecialDealCard onPress={test} />
          <PopularStuff
            title="Popular Store"
            subtitle="See all"
            onPress={goToPopularStore}
          />

          <FlatList
            data={stores}
            renderItem={({ item }) => (
              <GroceryCard
                id={item.id}
                icon={LovyGrocerySvg}
                name={item.name}
                onPress={() => goToStoreScreen(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<ActivityIndicator />}
          />

          <PopularStuff
            title="Popular Grocery"
            subtitle="See all"
            onPress={goToPopularGrocery}
          />
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <GroceryCard
                id={item.id}
                icon={LovyGrocerySvg}
                name={item.name}
                onPress={() => goToGroceryScreen(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<ActivityIndicator />}
          />
        </ScrollView>
      </Container>
    </Background>
  );
};
