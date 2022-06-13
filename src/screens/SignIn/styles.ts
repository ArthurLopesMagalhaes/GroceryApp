import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 23px;
  color: ${theme.colors.neutral};
`;
