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

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardsContainer = styled.View`
  margin-top: 24px;
  width: 100%;
`;

export const Legend = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
  margin-top: 10px;
`;

export const ProfilePhotoContainer = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: ${theme.colors.secondary200};
  margin-top: 24px;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const EditButton = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.primary};
  position: absolute;
  right: 80px;
  top: 220px;
  justify-content: center;
  align-items: center;
`;
