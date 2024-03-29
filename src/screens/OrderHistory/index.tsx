import { FlatList, View } from "react-native";
import { Background } from "../../components/Background";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InputMenu } from "../../components/InputMenu";
import {
  OrderHistoryItem,
  OrderHistoryItemType,
} from "./components/OrderHistoryItem";
import { SmileySad } from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useAppSelector";
import LottieView from "lottie-react-native";

import { api } from "../../services/api";
import { CenteredView } from "./styles";

export const OrderHistory = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [loadingInfos, setLoadingInfos] = useState(true);
  const [orders, setOrders] = useState<OrderHistoryItemType[]>([]);

  useEffect(() => {
    // search store in DB by id
    const fetchStore = async () => {
      const response = await api.post(
        "/me/order_history",
        {
          id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setOrders(response.data);
      setLoadingInfos(false);
    };
    fetchStore();
  }, []);

  return (
    <Background>
      <Container>
        <Header label="Order History" />
        <InputMenu />

        {orders.length > 0 ? (
          <FlatList
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 90 }}
            data={orders}
            renderItem={({ item }) => <OrderHistoryItem data={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <CenteredView>
            <LottieView
              source={require("../../assets/lottie/no-product.json")}
              autoPlay
              loop={false}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </CenteredView>
        )}
      </Container>
    </Background>
  );
};
