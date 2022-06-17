import styled from "styled-components/native";

import { theme } from "../../global/theme";

export const NavContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const FlatListContainer = styled.View`
  height: 206px;
  margin-bottom: 32px;
`;

export const ContainerAvoidTabBar = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 24px;
  padding-bottom: 115px;
`;