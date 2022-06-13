import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.ImageBackground`
  width: 100px;
  height: 100px;
`;
export const BrandName = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 25px;
  color: ${theme.colors.primary800};
`;
