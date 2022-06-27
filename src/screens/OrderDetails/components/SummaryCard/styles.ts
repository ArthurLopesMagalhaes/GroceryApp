import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled(LinearGradient).attrs({
  colors: ["#4FE58A", "#19C179"],
})`
  width: 100%;
  height: 263px;
  border-radius: 24px;
  margin-top: 20px;
  padding: 24px;
`;

export const LineContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.white};
`;
export const Price = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 20px;
  color: ${theme.colors.white};
`;

export const LineDivider = styled.View`
  height: 1px;
  background-color: ${theme.colors.white};
`;

export const Button = styled.TouchableOpacity`
  height: 55px;
  background-color: ${theme.colors.white};
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
`;
