import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const styles = StyleSheet.create({
  shadow: {
    width: 160,
    height: 206,
    borderRadius: 24,
    backgroundColor: theme.colors.white,
    marginRight: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Container = styled.View`
  width: 160px;
  height: 206px;
  border-radius: 24px;
  background-color: ${theme.colors.secondary100};
  margin-right: 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
  margin-top: 24px;
`;
export const Time = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.neutral_4};
  margin-top: 4px;
`;
