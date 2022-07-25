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
import { Star, StarHalf } from "phosphor-react-native";

export type TestimonialsProps = {
  author: string;
  date: string;
  comment: string;
  rating: number;
};

type Props = {
  data: TestimonialsProps;
};

export const TestimonialCard = ({ data }: Props) => {
  return (
    <Container>
      <Image source={ProfileSvg} />
      <InfoContainer>
        <Name>{data.author}</Name>
        <Date>{data.date}</Date>
        <Text>{data.comment}</Text>
      </InfoContainer>
      <StarsContainer>
        {data.rating < 5 ? (
          <StarHalf size={16} color="#ffffff" weight="fill" />
        ) : (
          <Star size={16} color="#ffffff" weight="fill" />
        )}

        <Number>{data.rating}</Number>
      </StarsContainer>
    </Container>
  );
};
