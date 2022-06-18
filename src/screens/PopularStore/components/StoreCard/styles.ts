import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 178px;
  height: 184px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary100};
  margin-bottom: 32px;
  elevation: 2;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
  margin-top: 24px;
`;
export const Time = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.neutral_4};
  margin-top: 4px;
`;
