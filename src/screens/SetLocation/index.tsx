import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {
  Address,
  AddressCard,
  Container,
  Content,
  EditIcon,
  Heading,
  InfoContainer,
  Label,
  MapContainer,
  Marker,
} from "./styles";

import { CardButton } from "../../components/CardButton";

import MarkerSvg from "../../assets/marker.svg";
import PencilSvg from "../../assets/pencil.svg";

export const SetLocation = () => {
  return (
    <Background>
      <Container>
        <Header label="Set your Location" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          {/* <CardButton legend="Set location" icon={MarkerSvg} /> */}
          <MapContainer></MapContainer>
          <AddressCard>
            <Marker>
              <MarkerSvg />
            </Marker>
            <InfoContainer>
              <Label>Location</Label>
              <Address>Bung Tomo St. 109</Address>
            </InfoContainer>
            <EditIcon>
              <PencilSvg width={16} />
            </EditIcon>
          </AddressCard>
          <Button label="Set Location" />
        </Content>
      </Container>
    </Background>
  );
};
