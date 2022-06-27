import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

export const Container = styled.View`
  height: 99px;
  border-radius: 16px;
  background-color: ${theme.colors.white};
  margin-bottom: 32px;
  padding: 12px;
  elevation: 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border-radius: 14px;
  background-color: ${theme.colors.primary100};
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Product = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
`;

export const Store = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_5};
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.primary};
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MinusButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background-color: ${theme.colors.primary100};
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background-color: ${theme.colors.primary800};
  justify-content: center;
  align-items: center;
`;

export const AmountNumber = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  margin: 0 12px;
`;

export const ViewTrash = styled.View`
  width: 50px;
  height: 99px;
  background-color: ${theme.colors.primary100};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const TrashButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary200};
`;
