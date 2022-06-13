import { useState } from "react";
import { Container, Label } from "./styles";
import { CheckBox } from "react-native-elements";

export const RememberMe = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Container>
      <CheckBox checked={true} />
      <Label>Remember me</Label>
    </Container>
  );
};
