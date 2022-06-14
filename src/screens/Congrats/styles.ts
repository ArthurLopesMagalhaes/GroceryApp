import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 24px;
`;

export const Heading = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 32px;
  color: ${theme.colors.primary};
  margin-top: 24px;
`;

export const Phrase = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  color: ${theme.colors.black};
  margin-top: 24px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex: 1.5;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
