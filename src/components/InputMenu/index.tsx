import { MiniIcon } from "../MiniIcon";
import { Container, Input, InputContainer } from "./styles";

import MenuSvg from "../../assets/menu.svg";
import LupeSvg from "../../assets/lupe.svg";
import { useNavigation } from "@react-navigation/native";

export const InputMenu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search" />
        <LupeSvg />
      </InputContainer>
      <MiniIcon
        icon={MenuSvg}
        onPress={() => navigation.navigate("FindGrocery")}
      />
    </Container>
  );
};
