import { CircleIcon } from "../../../../components/CircleIcon";
import { CardContent, Container, Info, InfoContainer, Title } from "./styles";

import { SvgProps } from "react-native-svg";

type Props = {
  title: string;
  info: string;
  icon: React.FC<SvgProps>;
};

export const ContactWayCard = ({ title, info, icon: Icon }: Props) => {
  return (
    <Container>
      <CardContent>
        <CircleIcon>
          <Icon width={32} height={32} />
        </CircleIcon>
        <InfoContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
        </InfoContainer>
      </CardContent>
    </Container>
  );
};
