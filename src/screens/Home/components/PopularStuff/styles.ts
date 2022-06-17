import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 20px;
  color: ${theme.colors.black};
`;
export const SubTitle = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.primary};
`;
