import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { InputMenu } from "../../components/InputMenu";
import { GroceryCard } from "./components/GroceryCard";
import { StoreProps } from "../Home/components/GroceryCard";

import CabbageImg from "../../assets/cabbage.png";
import { CardsContainer } from "./styles";

const stores = [
  {
    id: "1",
    product: "Fresh Cabbage",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "2",
    product: "Fresh Cabbage",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "3",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "4",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "5",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "6",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 8,
    image: CabbageImg,
  },
  {
    id: "7",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 81,
    image: CabbageImg,
  },
];

export const PopularGrocery = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Header label="Popular Grocery" onPress={() => navigation.goBack()} />
        <InputMenu />
        <FlatList
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GroceryCard
              image={item.image}
              product={item.product}
              store={item.store}
              price={item.price}
            />
          )}
        />
      </Container>
    </Background>
  );
};
