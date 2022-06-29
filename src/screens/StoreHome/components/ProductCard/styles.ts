import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  width: 160px;
  height: 197px;
  border-radius: 24px;
  padding: 24px;
  elevation: 3;
  align-items: center;
  margin-right: 24px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  color: ${theme.colors.black};
  margin-top: 16px;
`;
export const Price = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-top: 4px;
`;
