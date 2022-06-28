import { FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import { OrderHistoryItem } from "./components/OrderHistoryItem";
import { OrderItemContainer } from "./styles";

const data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
];

export const OrderHistory = () => {
  return (
    <Background>
      <Container>
        <Header label="Order History" />
        <InputMenu />
        <OrderItemContainer>
          <FlatList
            data={data}
            renderItem={({ item }) => <OrderHistoryItem />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </OrderItemContainer>
      </Container>
    </Background>
  );
};
