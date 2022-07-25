import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  flex: 0.8;
`;

export const ModalContainer = styled.View`
  flex: 1;
  padding: 0 24px 24px 24px;
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
  margin-bottom: 24px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const InfoContainer = styled.View``;

export const GroceryName = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 23px;
  color: ${theme.colors.black};
`;
export const DistanceRatingContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
  justify-content: flex-start;
`;

export const IconText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_2};
  margin-left: 12px;
  margin-right: 24px;
`;

export const GroceryDescription = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.neutral_2};
  margin-top: 12px;
`;

export const BoxButton = styled.View`
  padding: 0 20px;
  background-color: white;
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
