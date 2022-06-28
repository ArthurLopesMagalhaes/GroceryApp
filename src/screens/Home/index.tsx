import { FlatList } from "react-native";

import { Container } from "../../components/Container";
import { Background } from "../../components/Background";
import {
  ScrollView,
  FlatListContainer,
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
  const navigation = useNavigation();

  const goToFavorites = () => {
    navigation.navigate("Favorites");
  };
  const goToPopularStore = () => {
    navigation.navigate("PopularStore");
  };
  const goToPopularGrocery = () => {
    navigation.navigate("PopularGrocery");
  };

  return (
    <Background>
      <Container>
        <NavContainer>
          <Left>
            <Logo source={LogoImg} />
            <Greeting>Hello, Daniel!</Greeting>
          </Left>
          <IconsContainer>
            <MiniIcon icon={BellSvg} />
            <MiniIcon icon={HeartSvg} onPress={goToFavorites} />
          </IconsContainer>
        </NavContainer>
        <InputMenu />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SpecialDealCard />
          <PopularStuff
            title="Popular Store"
            subtitle="See all"
            onPress={goToPopularStore}
          />
          <FlatListContainer>
            <FlatList
              data={stores}
              renderItem={({ item }) => (
                <GroceryCard
                  id={item.id}
                  icon={item.icon}
                  name={item.name}
                  time={item.time}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </FlatListContainer>
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
