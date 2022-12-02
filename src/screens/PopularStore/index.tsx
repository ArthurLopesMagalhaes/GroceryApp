import { ActivityIndicator, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { InputMenu } from "../../components/InputMenu";
import { StoreCard } from "./components/StoreCard";
import { StoreProps } from "../Home/components/GroceryCard";

import LovyGrocerySvg from "../../assets/lovy-grocery.svg";
import { CardsContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const PopularStore = () => {
  const [loadingStores, setLoadingStores] = useState(true);
  const navigation = useNavigation();

  const goToStoreScreen = (id: string) => {
    navigation.navigate("StoreHome", { storeId: id });
  };

  const [storess, setStores] = useState<StoreProps[]>([]);

  const stores: StoreProps[] = [
    {
      id: "1",
      name: "Lovy Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "2",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
    {
      id: "3",
      name: "Haty Grocery",

      icon: LovyGrocerySvg,
    },
  ];

  useEffect(() => {
    const fetchStores = async () => {
      const response = await api.get("/stores");
      setStores(response.data.stores);
      setLoadingStores(false);
      console.log(response.data);
    };
    fetchStores();
  }, []);

  return (
    <Background>
      <Container>
        <Header label="Popular Store" onPress={() => navigation.goBack()} />
        <InputMenu />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          {loadingStores ? (
            <ActivityIndicator />
          ) : (
            <CardsContainer>
              {storess.map((item, index) => (
                <StoreCard
                  key={index}
                  id={item.id}
                  icon={item.icon}
                  name={item.name}
                  onPress={() => goToStoreScreen(item.id)}
                />
              ))}
            </CardsContainer>
          )}
        </ScrollView>
      </Container>
    </Background>
  );
};
