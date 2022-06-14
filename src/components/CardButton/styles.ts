import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.neutral_8};
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${theme.colors.primary100};
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 10px;
`;
