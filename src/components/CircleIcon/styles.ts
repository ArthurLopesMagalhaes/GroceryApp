import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${theme.colors.primary100};
  justify-content: center;
  align-items: center;
`;
