import styled from "styled-components/native";
import { theme } from "../../global/theme";

type MiniIconProps = {
  radius?: number;
};

export const Container = styled.TouchableOpacity<MiniIconProps>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.smoother_3};
  margin-left: 24px;
`;
