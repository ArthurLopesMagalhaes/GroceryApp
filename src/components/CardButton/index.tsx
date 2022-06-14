import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";
import { Circle, Container, Legend } from "./styles";

type Props = {
  height: number;
  children: ReactNode;
};

export const CardButton = ({ height, children }: Props) => {
  return <Container height={height}>{children}</Container>;
};
