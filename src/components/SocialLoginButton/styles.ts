import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 178px;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #f4f6f9;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-left: 12px;
`;
