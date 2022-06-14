import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  margin-bottom: 24px;
  border: 1px solid ${theme.colors.neutral_8};
`;
