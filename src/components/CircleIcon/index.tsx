import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children: ReactNode;
};

export const CircleIcon = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
