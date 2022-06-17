import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

// export const Container = styled.View`
//   flex-direction: row;
//   align-items: center;
//   background-color: ${theme.colors.primary};
//   width: 100%;
//   height: 180px;
//   border-radius: 24px;
//   margin-top: 24px;
// `;

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 180,
    borderRadius: 24,
    marginTop: 24,
    paddingLeft: 18,
    marginBottom: 32,
  },
});

export const Image = styled.Image`
  width: 165px;
`;
export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 15px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 23px;
  color: ${theme.colors.white};
  line-height: 34px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  width: 120px;
  height: 37px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.white};
`;
