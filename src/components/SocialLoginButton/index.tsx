import { Container, Label } from "./styles";
import { SvgProps } from "react-native-svg";

type Props = {
  icon: React.FC<SvgProps>;
  label: string;
  onPress: () => Promise<void>;
};

export const SocialLoginButton = ({ icon: Icon, label, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon width={25} height={25} />
      <Label>{label}</Label>
    </Container>
  );
};
