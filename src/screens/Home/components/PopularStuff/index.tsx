import { TouchableOpacity } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export const PopularStuff = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity>
        <SubTitle>{subtitle}</SubTitle>
      </TouchableOpacity>
    </Container>
  );
};
