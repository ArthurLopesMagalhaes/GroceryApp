import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Heading = styled.Text`
  width: 100%;
  text-align: left;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 24px;
  line-height: 24px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 20px;
  color: ${theme.colors.black};
  margin-top: 32px;
  margin-bottom: 20px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
