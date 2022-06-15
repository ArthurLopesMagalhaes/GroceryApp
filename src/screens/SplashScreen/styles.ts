import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 33px;
  color: ${theme.colors.white};
  text-align: center;
  line-height: 50px;
`;

export const Phrase = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 40px;
`;
