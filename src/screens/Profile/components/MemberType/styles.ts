import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  width: 125px;
  height: 25px;
  border-radius: 15px;
  border: 1px solid ${theme.colors.secondary200};
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;
export const Label = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.secondary};
`;
