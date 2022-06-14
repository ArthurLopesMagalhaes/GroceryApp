import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 128px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.neutral_8};
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  margin-left: 20px;
  flex: 1;
  justify-content: space-between;
  height: 56px;
`;

export const CardContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_4};
`;

export const Info = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
`;
