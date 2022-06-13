import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: -12px 0;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.black};
  margin-left: -12px;
`;
