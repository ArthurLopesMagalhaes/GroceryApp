import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import { Modal } from "../../components/Modal";
import { OrderItem } from "./components/OrderItem";
import { SummaryCard } from "./components/SummaryCard";
import { OrderItemContainer } from "./styles";

import TrashSvg from "../../assets/trash.svg";

const data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
];

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
        />
        <SummaryCard />
      </Container>
      <Modal
        title="Are you sure you want to delete this grocery?"
        cancelText="Cancel"
        doItText="Yes, delete"
        icon={TrashSvg}
      />
    </Background>
  );
};
