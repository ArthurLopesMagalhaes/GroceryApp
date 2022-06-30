import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { TestimonialCard } from "../../components/TestimonialCard";
import { ScrollView } from "./styles";

export const Testimonials = () => {
  return (
    <Background>
      <Container>
        <Header label="Testimonials" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </ScrollView>
        <Button label="Back" />
      </Container>
    </Background>
  );
};
