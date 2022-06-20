import { useState } from "react";
import { LineDivider } from "../../../components/SettingsItem/styles";
import { theme } from "../../../global/theme";
import { Container, Label, Switch } from "./styles";

type Props = {
  text: string;
};

export const NotificationItem = ({ text }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

  return (
    <>
      <Container>
        <Label>{text}</Label>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          thumbColor="white"
          trackColor={{
            false: "#9098A1",
            true: theme.colors.primary,
          }}
        />
      </Container>
      <LineDivider />
    </>
  );
};
