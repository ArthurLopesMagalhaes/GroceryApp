import { Container } from "./styles";
import BackgroundPng from "../../assets/background.png";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Background = ({ children }: Props) => {
  return <Container source={BackgroundPng}>{children}</Container>;
};
