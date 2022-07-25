import { ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { InputMenu } from "../../components/InputMenu";
import { StoreCard } from "./components/StoreCard";
import { StoreProps } from "../Home/components/GroceryCard";

import LovyGrocerySvg from "../../assets/lovy-grocery.svg";
import { CardsContainer } from "./styles";

export const PopularStore = () => {
  const navigation = useNavigation();

  const goToStoreScreen = (id: string) => {
    navigation.navigate("StoreHome", { storeId: id });
  };

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
    {
      id: "3",
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
    {
      id: "3",
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
    {
      id: "3",
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

  return (
    <Background>
      <Container>
        <Header label="Popular Store" onPress={() => navigation.goBack()} />
        <InputMenu />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <CardsContainer>
            {stores.map((item, index) => (
              <StoreCard
                key={index}
                id={item.id}
                icon={item.icon}
                name={item.name}
                time={item.time}
                onPress={() => goToStoreScreen(item.id)}
              />
            ))}
          </CardsContainer>
        </ScrollView>
      </Container>
    </Background>
  );
};
