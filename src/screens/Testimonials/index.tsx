import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import {
  TestimonialCard,
  TestimonialsProps,
} from "../../components/TestimonialCard";
import { BackButton, BackButtonText, ScrollView } from "./styles";

const data: TestimonialsProps[] = [
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 4,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
  {
    author: "Arthur",
    date: "August 23, 2021",
    comment: "omg, this is amazing",
    rating: 5,
  },
];

export const Testimonials = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Header label="Testimonials" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </ScrollView>
        <BackButton activeOpacity={0.8}>
          <CaretLeft size={16} color="#19C179" weight="bold" />
          <BackButtonText>Back</BackButtonText>
        </BackButton>
      </Container>
    </Background>
  );
};
