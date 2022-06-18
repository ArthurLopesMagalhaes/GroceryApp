import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

export const PopularStuff = ({ title, subtitle, ...rest }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity>
        <TouchableOpacity {...rest}>
          <SubTitle>{subtitle}</SubTitle>
        </TouchableOpacity>
      </TouchableOpacity>
    </Container>
  );
};
