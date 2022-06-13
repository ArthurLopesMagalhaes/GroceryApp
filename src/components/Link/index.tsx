import { Container, Label } from "./styles";

type Props = {
  label: string;
};

export const Link = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
