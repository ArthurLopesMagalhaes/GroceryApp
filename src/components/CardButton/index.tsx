import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";
import { Circle, Container, Legend } from "./styles";

type Props = {
  height: number;
  children: ReactNode;
  onPress?: () => void;
  selected?: boolean;
};

export const CardButton = ({
  height,
  children,
  onPress,
  selected = false,
}: Props) => {
  return (
    <Container height={height} onPress={onPress} selected={selected}>
      {children}
    </Container>
  );
};
