import { SvgProps } from "react-native-svg";
import { Container, Text } from "./styles";

import CoinSvg from "../../../../assets/coin.svg";

export const Voucher = () => {
  return (
    <Container>
      <CoinSvg />
      <Text>You have 4 vouchers</Text>
    </Container>
  );
};
