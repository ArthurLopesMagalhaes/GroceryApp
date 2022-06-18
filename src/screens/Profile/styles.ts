import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const ContainerScreen = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  flex: 0.6;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 24px 24px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 23px;
  color: ${theme.colors.black};
`;

export const Email = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.neutral_2};
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.white,
    paddingBottom: getBottomSpace() + 16,
    borderRadius: 32,
  },
  indicator: {
    backgroundColor: theme.colors.neutral_8,
    width: 38,
    height: 3,
  },
});
