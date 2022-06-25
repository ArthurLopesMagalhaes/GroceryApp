import { FlatList, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Favorite } from "../../components/Favorite";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import {
  BottomSheetContent,
  Buttons,
  Cancel,
  CardsContainer,
  LabelCancel,
  LabelYes,
  styles,
  Text,
  Yes,
} from "./styles";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import CabbageImg from "../../assets/cabbage.png";
import { useRef } from "react";

import EmptyHeartSvg from "../../assets/empty-heart.svg";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "../../components/Modal";

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

export const Favorites = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const OpenModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <Background>
      <Container>
        <Header label="Favorites" />
        <InputMenu />

        <CardsContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={stores}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Favorite
                image={item.image}
                product={item.product}
                store={item.store}
                price={item.price}
                onPress={OpenModal}
              />
            )}
          />
        </CardsContainer>
      </Container>
      <Modal
        title="Are you sure want to logout?"
        cancelText="Cancel"
        doItText="Yes, logout"
        icon={EmptyHeartSvg}
        ref={bottomSheetRef}
      />
    </Background>
  );
};
