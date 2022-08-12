import { useNavigation, useRoute } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import {
  TestimonialCard,
  TestimonialsProps,
} from "../../components/TestimonialCard";
import { api } from "../../services/api";
import { BackButton, BackButtonText, ScrollView } from "./styles";

type RouteParams = {
  storeId: string;
};

export const Testimonials = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [testimonials, setTestimonials] = useState<TestimonialsProps[]>([]);
  const { storeId } = route.params as RouteParams;

  useEffect(() => {
    const getTestimonials = async () => {
      const response = await api.get(`/testimonials/${storeId}`);
      console.log(response.data);
      setTestimonials(response.data.testimonials);
    };
    getTestimonials();
  }, [storeId]);

  return (
    <Background>
      <Container>
        <Header label="Testimonials" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {testimonials.map((item, index) => (
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
