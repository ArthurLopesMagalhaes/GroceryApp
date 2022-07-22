import { SvgProps } from "react-native-svg";
import {
  Container,
  ErrorContainer,
  ErrorText,
  IconContainer,
  InputContainer,
  InputField,
  Label,
  styles,
} from "./styles";

import { TextInputProps } from "react-native";
import { theme } from "../../global/theme";
import { WarningCircle } from "phosphor-react-native";
import { Controller } from "react-hook-form";

type Props = TextInputProps & {
  label: string;
  control?: any;
  name: string;
  icon: React.FC<SvgProps>;
  onPress?: () => void;
};

export const Input = ({
  label,
  control,
  name,
  icon: Icon,
  onPress,
  ...rest
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <Container style={styles.shadow}>
            <Label>{label}</Label>
            <InputContainer>
              <InputField
                placeholderTextColor={theme.colors.neutral_7}
                value={value}
                onChangeText={onChange}
                {...rest}
              />
              <IconContainer onPress={onPress}>
                <Icon width={24} height={24} />
              </IconContainer>
            </InputContainer>
          </Container>
          {error && (
            <ErrorContainer>
              <WarningCircle size={20} color="#DA1414" />
              <ErrorText>{error.message}</ErrorText>
            </ErrorContainer>
          )}
        </>
      )}
    />
  );
};
