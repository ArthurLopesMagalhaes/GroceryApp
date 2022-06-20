import styled from "styled-components/native";
import { theme } from "../../global/theme";

type SettingsItemProps = {
  bg: string;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-right: 9px;
  margin: 24px 0;
`;
export const IconContainer = styled.View<SettingsItemProps>`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

export const Label = styled.Text`
  margin-left: 16px;
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  flex: 1;
`;
export const ArrowButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const LineDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.neutral_8};
`;
