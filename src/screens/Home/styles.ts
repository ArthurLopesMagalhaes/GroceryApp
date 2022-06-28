import styled from "styled-components/native";

import { theme } from "../../global/theme";

export const NavContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-top: 24px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
export const Logo = styled.Image`
  width: 36px;
  height: 36px;
`;

export const Greeting = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 26px;
  color: ${theme.colors.black};
  margin-left: 24px;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 32px;
`;
