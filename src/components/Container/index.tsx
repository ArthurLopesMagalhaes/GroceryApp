import { ReactNode } from "react";
import { ContainerStyle } from "./styles";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
