import { LineDivider } from "../../../components/SettingsItem/styles";
import { theme } from "../../../global/theme";
import { Container, Label, Switch } from "./styles";

type Props = {
  text: string;
  value: boolean;
  toggleSwitch: () => void;
};

export const NotificationItem = ({ text, value, toggleSwitch }: Props) => {
  return (
    <>
      <Container>
        <Label>{text}</Label>
        <Switch
          value={value}
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
