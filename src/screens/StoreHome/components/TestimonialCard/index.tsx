import {
  Container,
  Date,
  Image,
  InfoContainer,
  Name,
  Number,
  StarsContainer,
  Testimonial,
} from "./styles";

import ProfileSvg from "../../../../assets/profile.png";
import StarSvg from "../../../../assets/star.svg";

export const TestimonialCard = () => {
  return (
    <Container>
      <Image source={ProfileSvg} />
      <InfoContainer>
        <Name>Jenny Wilson</Name>
        <Date>December 20, 2021</Date>
        <Testimonial>
          The grocery is very delicious and the service is satisfying! Love it!
        </Testimonial>
      </InfoContainer>
      <StarsContainer>
        <StarSvg />
        <Number>5</Number>
      </StarsContainer>
    </Container>
  );
};
