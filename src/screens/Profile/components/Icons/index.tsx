import { SvgProps } from "react-native-svg";
import { Container } from "./styles";

type Props = {
  icon: React.FC<SvgProps>;
};

export const Icons = ({ icon: Icon }: Props) => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};
