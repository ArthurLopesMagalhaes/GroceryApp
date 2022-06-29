import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: ${theme.colors.primary100};
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;
