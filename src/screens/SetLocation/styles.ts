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
  margin-bottom: 24px;
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

export const MapContainer = styled.View`
  width: 100%;
  flex: 1;
  border-radius: 20px;
  border: 1px solid ${theme.colors.primary};
`;
export const AddressCard = styled.View`
  width: 100%;
  height: 96px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.primary};
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 26px;
`;

export const Marker = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary100};
`;
export const InfoContainer = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  margin-left: 20px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${theme.colors.neutral_4};
`;

export const Address = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 18px;
  color: ${theme.colors.black};
`;

export const EditIcon = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
