import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Text = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.neutral_1};
  margin-top: 12px;
  text-align: center;
`;

export const BottomSheetContent = styled.View`
  align-items: center;
  flex: 1;
  padding: 37px 24px;
`;
export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 37px;
`;
export const Cancel = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  height: 55px;
  border-radius: 32px;
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.primary};
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const LabelCancel = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
`;

export const Yes = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  height: 55px;
  border-radius: 32px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const LabelYes = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.white};
`;

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.white,
    paddingBottom: getBottomSpace() + 16,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    backgroundColor: theme.colors.neutral_8,
    width: 38,
    height: 3,
  },
});
