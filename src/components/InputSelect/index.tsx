import {
  Container,
  IconContainer,
  InputContainer,
  Label,
  Placeholder,
  styles,
  Value,
} from "./styles";

import ArrowDownSvg from "../../assets/arrowdown.svg";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  onPress: () => void;
};

export const InputSelect = ({ label, placeholder, value, onPress }: Props) => {
  return (
    <Container style={styles.shadow}>
      <Label>{label}</Label>

      <InputContainer onPress={onPress}>
        {value ? (
          <Value>{value}</Value>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}

        <IconContainer>
          <ArrowDownSvg />
        </IconContainer>
      </InputContainer>
    </Container>
  );
};
