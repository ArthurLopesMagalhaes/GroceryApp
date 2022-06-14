import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 24px;
  align-items: center;
`;

export const Heading = styled.Text`
  width: 100%;
  text-align: left;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 24px;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_4};
`;

export const SendWarning = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-bottom: 60px;
`;
export const ContenScreen = styled.View`
  width: 100%;
  justify-content: center;
  flex: 1;
`;
export const CodeContentBox = styled.View`
  width: 100%;
  align-items: center;
`;

export const InputsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ResenCodeMsg = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 60px;
`;
export const ResenCodeMsgNumber = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.primary};
`;
