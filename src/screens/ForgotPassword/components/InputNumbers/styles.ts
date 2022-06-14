import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  width: 83px;
  height: 68px;
  border-radius: 20px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.neutral_8};
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 29px;
  color: ${theme.colors.black};
`;
