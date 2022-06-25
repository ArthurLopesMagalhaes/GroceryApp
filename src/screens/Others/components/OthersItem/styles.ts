import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  margin: 24px 0;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${theme.colors.primary100};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-left: 16px;
`;

export const TextArrowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-right: 15px;
`;
