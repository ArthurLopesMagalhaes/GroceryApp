import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {
  Address,
  AddressCard,
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
import MapView from "react-native-maps";

import MarkerSvg from "../../assets/marker.svg";
import PencilSvg from "../../assets/pencil.svg";
import { CircleIcon } from "../../components/CircleIcon";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { useState } from "react";

export const SetLocation = () => {
  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  const goToCongrats = () => {
    navigation.navigate("Congrats");
  };

  return (
    <Background>
      <Container>
        <Header label="Set your Location" onPress={() => navigation.goBack()} />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          {!location ? (
            <CardButton height={160}>
              <CircleIcon>
                <MarkerSvg />
              </CircleIcon>
              <Legend>Set Location</Legend>
            </CardButton>
          ) : (
            <>
              <MapContainer>
                <MapView
                  mapType="mutedStandard"
                  style={{ flex: 1 }}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                />
              </MapContainer>
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
            </>
          )}
          <Button label="Set Location" onPress={goToCongrats} />
        </Content>
      </Container>
    </Background>
  );
};
