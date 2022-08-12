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
  id: number;
  rating: number;
  comment: string;
  date: string;
  user: {
    full_name: string;
    profile_photo: string;
  };
};

type Props = {
  data: TestimonialsProps;
};

export const TestimonialCard = ({ data }: Props) => {
  return (
    <Container>
      <Image source={{ uri: data.user.profile_photo }} />
      <InfoContainer>
        <Name>{data.user.full_name}</Name>
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
