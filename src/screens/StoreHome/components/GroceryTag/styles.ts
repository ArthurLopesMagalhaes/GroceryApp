import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  height: 25px;
  border-radius: 25px;
  border: 1px solid ${theme.colors.succcess};
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.succcess};
`;
