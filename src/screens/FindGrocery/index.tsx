import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { InputMenu } from "../../components/InputMenu";
import { FilterTag } from "../FindGrocery/components/FilterTag/index";

import { ScrollView, TagContainer, Title } from "./styles";
import { Button } from "../../components/Button";

export const FindGrocery = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.reset({
      routes: [{ name: "TabRoutes" }],
    });
  };

  return (
    <Background>
      <Container>
        <Header label="Find your Grocery" onPress={goToHome} />
        <InputMenu />
        <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView>
        <Button label="Search" />
      </Container>
    </Background>
  );
};
