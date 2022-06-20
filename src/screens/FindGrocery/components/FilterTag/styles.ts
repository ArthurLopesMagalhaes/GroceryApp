import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.TouchableHighlight`
  height: 36px;
  border-radius: 24px;
  border: 2px solid ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 20px;
  padding: 0 12px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.primary};
`;
