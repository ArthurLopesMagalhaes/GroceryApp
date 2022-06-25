import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 20px;
  color: ${theme.colors.black};

  margin-bottom: 20px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 32px;
`;
