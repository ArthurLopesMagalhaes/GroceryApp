import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import ProfileImg from "../../assets/profile.png";

import {
  CardsContainer,
  Container,
  Content,
  EditButton,
  Heading,
  ProfilePhotoContainer,
} from "./styles";

import PencilSvg from "../../assets/pencil.svg";
import { Image } from "react-native";
import { CardButton } from "../../components/CardButton";

import CameraSvg from "../../assets/camera.svg";
import FolderSvg from "../../assets/folder.svg";

export const UploadPhoto = () => {
  return (
    <Background>
      <Container>
        <Header label="Upload your photo" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          <ProfilePhotoContainer>
            <Image source={ProfileImg} />
            <EditButton>
              <PencilSvg />
            </EditButton>
          </ProfilePhotoContainer>

          {/* <CardsContainer>
            <CardButton legend="Take photo" icon={CameraSvg} />
            <CardButton legend="From gallery" icon={FolderSvg} />
          </CardsContainer> */}
          <Button label="Next" />
        </Content>
      </Container>
    </Background>
  );
};
