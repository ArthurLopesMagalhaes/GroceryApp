import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";
import { Circle, Container, Legend } from "./styles";

type Props = {
  height: number;
  children: ReactNode;
  onPress?: () => void;
};

export const CardButton = ({ height, children, onPress }: Props) => {
  return (
    <Container height={height} onPress={onPress}>
      {children}
    </Container>
  );
};
