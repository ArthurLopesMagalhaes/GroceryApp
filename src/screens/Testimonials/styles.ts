import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const ScrollView = styled.ScrollView`
  padding-top: 0;
  padding-bottom: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 55px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 32px;
  border: 2px solid ${theme.colors.primary};
  margin: 20px 0;
`;

export const BackButtonText = styled.Text`
  margin-left: 8px;
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
`;
