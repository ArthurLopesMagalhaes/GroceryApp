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
export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  border-radius: 48px;
  border: 1px solid ${theme.colors.neutral_8};
  width: 100%;
  height: 48px;
`;
export const InputField = styled.TextInput`
  font-family: ${theme.fonts.semibold};
  height: 48px;
  flex: 1;
  font-size: 16px;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: -12px;
  margin-bottom: 20px;
  margin-left: 25px;
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  margin-left: 12px;
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
