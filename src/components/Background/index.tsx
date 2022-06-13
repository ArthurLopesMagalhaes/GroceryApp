import { Container } from "./styles";
import BackgroundSvg from "../../assets/background.svg";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Background = ({ children }: Props) => {
  return <Container source={BackgroundSvg}>{children}</Container>;
};
