import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

import { ScrollView } from "./styles";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { NotificationItem } from "./components";

export const Notification = () => {
  return (
    <Background>
      <Container>
        <Header label="Notification" />
        <Heading text="Notify me when" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <NotificationItem text="Buy something" />
          <NotificationItem text="Receive points" />
          <NotificationItem text="Send payments" />
          <NotificationItem text="New promo available" />
          <NotificationItem text="New service available" />
        </ScrollView>
      </Container>
    </Background>
  );
};
