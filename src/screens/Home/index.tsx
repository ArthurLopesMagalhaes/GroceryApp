import { FlatList } from "react-native";

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

const stores: StoreProps[] = [
  {
    id: "1",
    name: "Lovy Grocery",
    time: 10,
    icon: LovyGrocerySvg,
  },
  {
    id: "2",
    name: "Haty Grocery",
    time: 14,
    icon: LovyGrocerySvg,
  },
  {
    id: "3",
    name: "Haty Grocery",
    time: 14,
    icon: LovyGrocerySvg,
  },
];

export const Home = () => {
  const user = useAppSelector((state) => state.user);

  const navigation = useNavigation();

  const goToFavorites = () => {
    // null;
    // navigation.reset({
    //   routes: [
    //     { name: "ProfileStackScreens", params: { screen: "Favorites" } },
    //   ],
    // });
    // navigation.navigate("ProfileStackScreens", { screen: "Favorites" });
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
          <SpecialDealCard />
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
                icon={item.icon}
                name={item.name}
                time={item.time}
                onPress={() => goToStoreScreen(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <PopularStuff
            title="Popular Grocery"
            subtitle="See all"
            onPress={goToPopularGrocery}
          />
          <FlatList
            data={stores}
            renderItem={({ item }) => (
              <GroceryCard
                id={item.id}
                icon={item.icon}
                name={item.name}
                time={item.time}
                onPress={() => goToGroceryScreen(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </Container>
    </Background>
  );
};
