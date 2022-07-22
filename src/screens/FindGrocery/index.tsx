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
  const [location, setLocation] = useState(0);
  const [grocery, setGrocery] = useState("");

  const filters = { type, location, grocery };

  const PickFilter = (filter: string | number) => {};

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
            <FilterTag
              text="Store"
              active={filters.type === "store"}
              onPress={() => setType("store")}
            />
            <FilterTag
              text="Grocery"
              active={filters.type === "grocery"}
              onPress={() => setType("grocery")}
            />
          </TagContainer>
          <Title>Location</Title>
          <TagContainer>
            <FilterTag
              text="1 km"
              active={filters.location === 1}
              onPress={() => setLocation(1)}
            />
            <FilterTag
              text="< 5 km"
              active={filters.location === 5}
              onPress={() => setLocation(5)}
            />
            <FilterTag
              text="< 10 km"
              active={filters.location === 10}
              onPress={() => setLocation(10)}
            />
            <FilterTag
              text="> 10 km"
              active={filters.location === 11}
              onPress={() => setLocation(11)}
            />
          </TagContainer>
          <Title>Grocery</Title>
          <TagContainer>
            <FilterTag
              text="Artichoke"
              active={filters.grocery === "artichoke"}
              onPress={() => setGrocery("artichoke")}
            />
            <FilterTag
              text="Broccoli"
              active={filters.grocery === "broccoli"}
              onPress={() => setGrocery("broccoli")}
            />
            <FilterTag
              text="Cabbage"
              active={filters.grocery === "cabbage"}
              onPress={() => setGrocery("cabbage")}
            />
            <FilterTag
              text="Asparagus"
              active={filters.grocery === "asparagus"}
              onPress={() => setGrocery("asparagus")}
            />
            <FilterTag
              text="Celery"
              active={filters.grocery === "celery"}
              onPress={() => setGrocery("celery")}
            />
            <FilterTag
              text="Bean"
              active={filters.grocery === "bean"}
              onPress={() => setGrocery("bean")}
            />
            <FilterTag
              text="Corn"
              active={filters.grocery === "corn"}
              onPress={() => setGrocery("corn")}
            />
            <FilterTag
              text="Cucumber"
              active={filters.grocery === "cucumber"}
              onPress={() => setGrocery("cucumber")}
            />
            <FilterTag
              text="Lettuce"
              active={filters.grocery === "lettuce"}
              onPress={() => setGrocery("lettuce")}
            />
          </TagContainer>
        </ScrollView>
        <Button label="Search" />
      </Container>
    </Background>
  );
};
