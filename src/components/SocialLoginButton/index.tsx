import { Container, Label } from "./styles";
import { SvgProps } from "react-native-svg";

type Props = {
  icon: React.FC<SvgProps>;
  label: string;
};

export const SocialLoginButton = ({ icon: Icon, label }: Props) => {
  return (
    <Container>
      <Icon width={25} height={25} />
      <Label>{label}</Label>
    </Container>
  );
};
