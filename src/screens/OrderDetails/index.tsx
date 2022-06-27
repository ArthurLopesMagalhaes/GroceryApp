import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import { OrderItem } from "./components/OrderItem";
import { SummaryCard } from "./components/SummaryCard";
import { OrderItemContainer } from "./styles";

const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

export const OrderDetails = () => {
  return (
    <Background>
      <Container>
        <Header label="Order details" />
        <InputMenu />
        <OrderItemContainer
          data={data}
          renderItem={({ item }) => <OrderItem />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        ></OrderItemContainer>
        <SummaryCard />
      </Container>
    </Background>
  );
};
