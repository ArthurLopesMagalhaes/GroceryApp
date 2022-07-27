import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

import { ScrollView } from "./styles";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { NotificationItem } from "./components";
import { useNavigation } from "@react-navigation/native";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useAppSelector";
import {
  setBuySomething,
  setNewPromo,
  setNewService,
  setReceivePoints,
  setSendPayments,
} from "../../redux/reducers/notificationPreferencesReducer";

export const Notification = () => {
  const navigation = useNavigation();

  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  return (
    <Background>
      <Container>
        <Header label="Notification" onPress={() => navigation.goBack()} />
        <Heading text="Notify me when" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <NotificationItem
            text="Buy something"
            value={notification.buySomething}
            toggleSwitch={() =>
              dispatch(setBuySomething(!notification.buySomething))
            }
          />
          <NotificationItem
            text="Receive points"
            value={notification.receivePoints}
            toggleSwitch={() =>
              dispatch(setReceivePoints(!notification.receivePoints))
            }
          />
          <NotificationItem
            text="Send payments"
            value={notification.sendPayments}
            toggleSwitch={() =>
              dispatch(setSendPayments(!notification.sendPayments))
            }
          />
          <NotificationItem
            text="New promo available"
            value={notification.newPromo}
            toggleSwitch={() => dispatch(setNewPromo(!notification.newPromo))}
          />
          <NotificationItem
            text="New service available"
            value={notification.newService}
            toggleSwitch={() =>
              dispatch(setNewService(!notification.newService))
            }
          />
        </ScrollView>
      </Container>
    </Background>
  );
};
