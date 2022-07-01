import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.neutral_1};
  margin-bottom: 8px;
  margin-left: 24px;
`;
export const InputContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-radius: 48px;
  border: 1px solid ${theme.colors.neutral_8};
  width: 100%;
  height: 48px;
`;
export const Placeholder = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.neutral_7};
`;

export const Value = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  text-transform: capitalize;
`;

export const IconContainer = styled.View`
  width: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
