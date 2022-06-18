import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 88px;
  border-radius: 16px;
  padding: 12px 20px 12px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.smoother_1};
  margin-bottom: 32px;
  elevation: 2;
`;

export const ImgContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: ${theme.colors.primary100};
  border-radius: 12px;
`;

export const Image = styled.Image`
  width: 50px;
`;

export const InfoContainer = styled.View`
  margin-left: 20px;
  flex: 1;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
`;

export const Store = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_5};
  margin-top: 4px;
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
`;

export const HeartButton = styled.TouchableOpacity`
  padding: 12px;
`;
