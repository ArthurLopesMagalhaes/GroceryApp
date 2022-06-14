import { StyleSheet } from "react-native";
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

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardsContainer = styled.View`
  margin-top: 24px;
`;

export const ProfilePhotoContainer = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: ${theme.colors.secondary200};
  margin-top: 24px;
  position: relative;
`;

export const EditButton = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.primary};
  position: absolute;
  right: 10px;
  bottom: 2px;
  justify-content: center;
  align-items: center;
`;
