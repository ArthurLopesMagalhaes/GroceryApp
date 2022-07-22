import { FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import {
  OrderHistoryItem,
  OrderHistoryItemType,
} from "./components/OrderHistoryItem";
import { SmileySad } from "phosphor-react-native";

const data: OrderHistoryItemType[] = [
  {
    store: "Lovy Grocery",
    product: "Fresh Cabbage",
    price: 10,
    status: "process",
  },
];

export const OrderHistory = () => {
  return (
    <Background>
      <Container>
        <Header label="Order History" />
        <InputMenu />

        <FlatList
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 90 }}
          data={data}
          renderItem={({ item }) => <OrderHistoryItem data={item} />}
          keyExtractor={(item) => item.product}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <SmileySad size={20} color="red" />}
        />
      </Container>
    </Background>
  );
};
