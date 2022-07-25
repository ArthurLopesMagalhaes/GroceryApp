import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { StyleSheet } from "react-native";

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.white};
`;

export const ButtonContainer = styled.TouchableOpacity``;

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 32,
    overflow: "hidden",
    marginBottom: 20,
  },
});
