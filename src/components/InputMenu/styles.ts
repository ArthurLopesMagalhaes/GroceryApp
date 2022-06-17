import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;
export const InputContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px;
  background-color: ${theme.colors.neutral_9};
  border-radius: 48px;
  height: 44px;
`;
export const Input = styled.TextInput`
  flex: 1;
  margin-right: 12px;
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.black};
`;
