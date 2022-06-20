import styled from "styled-components/native";
import { theme } from "../../../global/theme";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  margin: 24px 0;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
`;

export const Switch = styled.Switch``;
