import {
  Container,
  Date,
  Image,
  InfoContainer,
  Name,
  Number,
  StarsContainer,
  Text,
} from "./styles";

import ProfileSvg from "../../assets/profile.png";
import StarSvg from "../../assets/star.svg";

export const TestimonialCard = () => {
  return (
    <Container>
      <Image source={ProfileSvg} />
      <InfoContainer>
        <Name>Jenny Wilson</Name>
        <Date>December 20, 2021</Date>
        <Text>
          The grocery is very delicious and the service is satisfying! Love it!
        </Text>
      </InfoContainer>
      <StarsContainer>
        <StarSvg width={16} />
        <Number>5</Number>
      </StarsContainer>
    </Container>
  );
};
