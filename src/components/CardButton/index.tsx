import { SvgProps } from "react-native-svg";
import { Circle, Container, Legend } from "./styles";

type Props = {
  legend: string;
  icon: React.FC<SvgProps>;
};

export const CardButton = ({ legend, icon: Icon }: Props) => {
  return (
    <Container>
      <Circle>
        <Icon width={32} height={32} />
      </Circle>
      <Legend>{legend}</Legend>
    </Container>
  );
};
