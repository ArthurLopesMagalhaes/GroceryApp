import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 24px;
`;

export const Heading = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 23px;
  color: ${theme.colors.black};
  text-align: center;
  margin-bottom: 32px;
`;

export const Form = styled.View`
  margin-top: 18px;
  width: 100%;
`;

export const DontHaveAccountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.neutral_5};
  margin-right: 8px;
`;

export const SimpleText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  text-align: center;
  margin-top: 32px;
`;

export const SocialLoginContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
