import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 67px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${theme.colors.white};
  elevation: 7;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
export const Text = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
  flex: 1;
  text-align: left;
  margin-left: 24px;
`;
