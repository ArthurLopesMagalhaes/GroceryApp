import { ArrowContainer, Container, Label } from "./styles";
import ArrowLeftSvg from "../../assets/arrowleft.svg";

type Props = {
  label: string;
};

export const Header = ({ label }: Props) => {
  return (
    <Container>
      <ArrowContainer>
        <ArrowLeftSvg />
      </ArrowContainer>
      <Label>{label}</Label>
    </Container>
  );
};
