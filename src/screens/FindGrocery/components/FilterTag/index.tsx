import { Container, Text } from "./styles";

type Props = {
  text: string;
};

export const FilterTag = ({ text }: Props) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
