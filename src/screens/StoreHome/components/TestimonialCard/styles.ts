import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  flex-direction: row;
  border-radius: 16px;
  padding: 12px;
  padding-right: 32px;
  justify-content: space-between;
  align-items: flex-start;
  elevation: 3;
`;

export const Image = styled.Image`
  width: 62px;
  height: 62px;
  border-radius: 31px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 20px;
  margin-right: 24px;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
`;
export const Date = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 11px;
  color: ${theme.colors.neutral_5};
  margin-top: 4px;
`;
export const Testimonial = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.black};
  margin-top: 4px;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.primary};
  border-radius: 9px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.white};
  margin-left: 4px;
`;
