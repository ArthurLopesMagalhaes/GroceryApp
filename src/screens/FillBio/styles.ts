import styled from "styled-components/native";
import { theme } from "../../global/theme";

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

export const ModalPicker = styled.Modal``;

export const ModalContent = styled.View`
  width: 100%;
  flex: 1;
  background-color: #00000080;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  background-color: ${theme.colors.secondary};
  border-radius: 16px;
  width: 80%;
  height: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ModalSelectItem = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  padding-left: 30px;
  height: 50px;
`;

export const SelectItem = styled.Text``;
