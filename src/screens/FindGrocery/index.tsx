import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { FilterTag } from "../FindGrocery/components/FilterTag/index";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { InputMenu } from "../../components/InputMenu";
import { Button } from "../../components/Button";
import { ScrollView, TagContainer, Title } from "./styles";

export const FindGrocery = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [grocery, setGrocery] = useState("");

  const filters = [type, location, grocery].filter(Boolean);

  const goToHome = () => {
    navigation.reset({
      routes: [{ name: "TabRoutes" }],
    });
  };

  const handleSearch = () => {
    navigation.navigate("PopularGrocery", { filters });
  };

  return (
    <Background>
      <Container>
        <Header label="Find your Grocery" onPress={goToHome} />
        <InputMenu />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Type</Title>
          <TagContainer>
            <FilterTag
              text="Store"
              active={type === "store"}
              onPress={
                type === "store" ? () => setType("") : () => setType("store")
              }
            />
            <FilterTag
              text="Grocery"
              active={type === "grocery"}
              onPress={
                type === "grocery"
                  ? () => setType("")
                  : () => setType("grocery")
              }
            />
          </TagContainer>
          <Title>Location</Title>
          <TagContainer>
            <FilterTag
              text="1 km"
              active={location === "1 km"}
              onPress={() => setLocation("1 km")}
            />
            <FilterTag
              text="< 5 km"
              active={location === "< 5 km"}
              onPress={() => setLocation("< 5 km")}
            />
            <FilterTag
              text="< 10 km"
              active={location === "< 10 km"}
              onPress={() => setLocation("< 10 km")}
            />
            <FilterTag
              text="> 10 km"
              active={location === "> 10 km"}
              onPress={() => setLocation("> 10 km")}
            />
          </TagContainer>
          <Title>Grocery</Title>
          <TagContainer>
            <FilterTag
              text="Artichoke"
              active={grocery === "artichoke"}
              onPress={() => setGrocery("artichoke")}
            />
            <FilterTag
              text="Broccoli"
              active={grocery === "broccoli"}
              onPress={() => setGrocery("broccoli")}
            />
            <FilterTag
              text="Cabbage"
              active={grocery === "cabbage"}
              onPress={() => setGrocery("cabbage")}
            />
            <FilterTag
              text="Asparagus"
              active={grocery === "asparagus"}
              onPress={() => setGrocery("asparagus")}
            />
            <FilterTag
              text="Celery"
              active={grocery === "celery"}
              onPress={() => setGrocery("celery")}
            />
            <FilterTag
              text="Bean"
              active={grocery === "bean"}
              onPress={() => setGrocery("bean")}
            />
            <FilterTag
              text="Corn"
              active={grocery === "corn"}
              onPress={() => setGrocery("corn")}
            />
            <FilterTag
              text="Cucumber"
              active={grocery === "cucumber"}
              onPress={() => setGrocery("cucumber")}
            />
            <FilterTag
              text="Lettuce"
              active={grocery === "lettuce"}
              onPress={() => setGrocery("lettuce")}
            />
          </TagContainer>
        </ScrollView>
        <Button label="Search" onPress={handleSearch} />
      </Container>
    </Background>
  );
};
