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
  Legend,
  MapContainer,
  Marker,
} from "./styles";

import { CardButton } from "../../components/CardButton";

import MarkerSvg from "../../assets/marker.svg";
import PencilSvg from "../../assets/pencil.svg";
import { CircleIcon } from "../../components/CircleIcon";

export const SetLocation = () => {
  return (
    <Background>
      <Container>
        <Header label="Set your Location" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          <CardButton height={160}>
            <CircleIcon>
              <MarkerSvg />
            </CircleIcon>
            <Legend>Set Location</Legend>
          </CardButton>
          {/* <MapContainer></MapContainer>
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
          </AddressCard> */}
          <Button label="Set Location" />
        </Content>
      </Container>
    </Background>
  );
};
