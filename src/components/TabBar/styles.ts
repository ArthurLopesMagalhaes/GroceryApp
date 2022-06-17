import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  height: 91px;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  background-color: yellow;
`;

export const IconContainer = styled.TouchableOpacity`
  height: 43px;
  border-radius: 12px;
  background-color: ${theme.colors.primary100};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
`;

export const MenuLabel = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
  margin-left: 12px;
`;

export const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: 91,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
});
