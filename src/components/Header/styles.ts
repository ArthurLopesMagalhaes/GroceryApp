import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 29px;
`;
export const ArrowContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background-color: ${theme.colors.primary100};
  margin-right: 24px;
`;
export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 26px;
  color: ${theme.colors.black};
`;
