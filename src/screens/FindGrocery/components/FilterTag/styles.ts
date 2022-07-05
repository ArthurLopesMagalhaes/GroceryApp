import styled from "styled-components/native";
import { theme } from "../../../../global/theme";

type TagProps = {
  active: boolean;
};

export const Container = styled.TouchableOpacity<TagProps>`
  height: 36px;
  border-radius: 24px;
  border: 2px solid ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 20px;
  padding: 0 12px;
  background-color: ${(props) =>
    props.active ? `${theme.colors.primary}` : `${theme.colors.white}`};
`;

export const Text = styled.Text<TagProps>`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${(props) =>
    props.active ? `${theme.colors.white}` : `${theme.colors.primary}`};
`;
