import { Alert, FlatList, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Favorite } from "../../components/Favorite";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";

import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import CabbageImg from "../../assets/cabbage.png";
import { useRef, useState } from "react";

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
    id: "7gfgs",
    product: "Lovy Grocery",
    store: "Lovy Grocery",
    price: 81,
    image: CabbageImg,
  },
];

export const Favorites = () => {
  const navigation = useNavigation();
  const [currentItemId, setCurrentItemId] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);
  const openModal = (id: string) => {
    setCurrentItemId(id);
    bottomSheetRef.current?.expand();
  };
  const closeModal = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <Background>
      <Container>
        <Header label="Favorites" onPress={() => navigation.goBack()} />
        <InputMenu />

        <FlatList
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Favorite
              image={item.image}
              product={item.product}
              store={item.store}
              price={item.price}
              onPress={() => openModal(item.id)}
            />
          )}
        />
      </Container>
      <Modal
        title="Are you sure want to remove this item from favorites?"
        cancelText="Cancel"
        doItText="Yes, remove"
        icon={EmptyHeartSvg}
        ref={bottomSheetRef}
        onCancelPress={closeModal}
        onConfirmedPress={() => Alert.alert(currentItemId)}
      />
    </Background>
  );
};
