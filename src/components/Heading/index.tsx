import { Container } from "./styles";

type Props = {
  text: string;
};

export const Heading = ({ text }: Props) => {
  return <Container>{text}</Container>;
};
