import { MiniIcon } from "../MiniIcon";
import { Container, Input, InputContainer } from "./styles";

import MenuSvg from "../../assets/menu.svg";
import LupeSvg from "../../assets/lupe.svg";

export const InputMenu = () => {
  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search" />
        <LupeSvg />
      </InputContainer>
      <MiniIcon icon={MenuSvg} />
    </Container>
  );
};
