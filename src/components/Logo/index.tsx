import { BrandName, Container, LogoImg } from "./styles";
import LogoSvg from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <Container>
      <LogoImg source={LogoSvg} />

      <BrandName>Verdo</BrandName>
    </Container>
  );
};
