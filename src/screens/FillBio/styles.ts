import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 24px;
`;

export const Heading = styled.Text`
  width: 100%;
  text-align: left;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 24px;
  line-height: 24px;
`;

export const Form = styled.View`
  margin-top: 35px;
  width: 100%;
`;
