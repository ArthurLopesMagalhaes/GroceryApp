import { SvgProps } from "react-native-svg";
import { Circle, Container, Legend } from "./styles";

type Props = {
  legend: string;
  icon: React.FC<SvgProps>;
};

export const Card = ({ legend, icon: Icon }: Props) => {
  return (
    <Container>
      <Circle>
        <Icon />
      </Circle>
      <Legend>{legend}</Legend>
    </Container>
  );
};
