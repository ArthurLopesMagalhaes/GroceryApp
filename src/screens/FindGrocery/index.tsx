import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { CardsContainer, Heading, TagContainer, Title } from "./styles";

import { PaymentMethodItem } from "../../components/PaymentMethodItem";
import PaypalSvg from "../../assets/paypal.svg";
import VisaSvg from "../../assets/visa.svg";
import PayoneerSvg from "../../assets/payoneer.svg";
import { CardButton } from "../../components/CardButton";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { FilterTag } from "../FindGrocery/components/FilterTag/index";
import { InputMenu } from "../../components/InputMenu";

export const FindGrocery = () => {
  const navigation = useNavigation();

  const goToUploadPhoto = () => {
    navigation.navigate("UploadPhoto");
  };

  return (
    <Background>
      <Container>
        <Header label="Find your Grocery" />
        <InputMenu />
        <Title>Type</Title>
        <TagContainer>
          <FilterTag text="Store" />
          <FilterTag text="Grocery" />
        </TagContainer>
        <Title>Location</Title>
        <TagContainer>
          <FilterTag text="1 km" />
          <FilterTag text="< 5 km" />
          <FilterTag text="< 10 km" />
          <FilterTag text="> 10 km" />
        </TagContainer>
        <Title>Grocery</Title>
        <TagContainer>
          <FilterTag text="Artichoke" />
          <FilterTag text="Broccoli" />
          <FilterTag text="Cabbage" />
          <FilterTag text="Asparagus" />
          <FilterTag text="Celery" />
          <FilterTag text="Bean" />
          <FilterTag text="Corn" />
          <FilterTag text="Cucumber" />
          <FilterTag text="Lettuce" />
        </TagContainer>
      </Container>
    </Background>
  );
};
