import { XCircle } from "phosphor-react-native";
import { Container, IconButton, Text } from "./styles";

type Props = {
  label: string;
  onClosedPress: () => void;
};

export const Filter = ({ label, onClosedPress }: Props) => {
  return (
    <Container>
      <Text>{label}</Text>
      <IconButton activeOpacity={0.7} onPress={onClosedPress}>
        <XCircle size={16} color="#ffffff" weight="bold" />
      </IconButton>
    </Container>
  );
};
