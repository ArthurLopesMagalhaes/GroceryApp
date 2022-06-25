import { useState } from "react";
import { SvgProps } from "react-native-svg";
import { LineDivider } from "../../../../components/SettingsItem/styles";
import { theme } from "../../../../global/theme";
import {
  Container,
  Label,
  IconContainer,
  TextArrowContainer,
  Text,
} from "./styles";

import ArrowRight from "../../../../assets/arrow-right.svg";

type Props = {
  label: string;
  icon: React.FC<SvgProps>;
  text?: string;
};

export const OthersItem = ({ label, icon: Icon, text }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

  return (
    <>
      <Container>
        <IconContainer>
          <Icon width={24} height={24} />
        </IconContainer>
        <Label>{label}</Label>
        <TextArrowContainer>
          <Text>{text}</Text>
          <ArrowRight />
        </TextArrowContainer>
      </Container>
      <LineDivider />
    </>
  );
};
