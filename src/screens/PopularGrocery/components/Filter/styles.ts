import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  height: 36px;
  border-radius: 24px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin-right: 12px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.white};
  margin-right: 4px;
  text-transform: capitalize;
`;

export const IconButton = styled.TouchableOpacity``;
