import { SvgProps } from "react-native-svg";
import {
  ArrowButton,
  Container,
  IconContainer,
  Label,
  LineDivider,
} from "./styles";

import ArrowRightSvg from "../../assets/arrow-right.svg";
import { theme } from "../../global/theme";

type Props = {
  icon: React.FC<SvgProps>;
  label: string;
  hasArrow?: boolean;
  bg?: string;
};

export const SettingsItem = ({
  icon: Icon,
  label,
  hasArrow = true,
  bg = theme.colors.primary100,
}: Props) => {
  return (
    <>
      <Container>
        <IconContainer bg={bg}>
          <Icon width={16} height={16} />
        </IconContainer>
        <Label>{label}</Label>
        {hasArrow && (
          <ArrowButton>
            <ArrowRightSvg />
          </ArrowButton>
        )}
      </Container>
      <LineDivider />
    </>
  );
};
