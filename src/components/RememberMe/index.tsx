import { useState } from "react";
import { Container, Label } from "./styles";
import { CheckBox } from "react-native-elements";
import { theme } from "../../global/theme";

export const RememberMe = () => {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <Container>
      <CheckBox
        checked={checkBox}
        onPress={() => setCheckBox((prevState) => !prevState)}
        checkedColor={theme.colors.primary}
      />
      <Label>Remember me</Label>
    </Container>
  );
};
