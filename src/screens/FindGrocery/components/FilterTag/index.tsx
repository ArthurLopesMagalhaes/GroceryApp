import { Container, Text } from "./styles";

type Props = {
  text: string;
  active: boolean;
  onPress: () => void;
};

export const FilterTag = ({ text, active, onPress }: Props) => {
  return (
    <Container active={active} onPress={onPress} activeOpacity={0.9}>
      <Text active={active}>{text}</Text>
    </Container>
  );
};
