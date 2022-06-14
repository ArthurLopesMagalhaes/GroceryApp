import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import ProfileImg from "../../assets/profile.png";

import {
  Container,
  Content,
  EditButton,
  Heading,
  ProfilePhotoContainer,
} from "./styles";

import PencilSvg from "../../assets/pencil.svg";
import { Image } from "react-native";

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
            <Card legend="Take photo" icon={CameraSvg} />
            <Card legend="From gallery" icon={FolderSvg} />
          </CardsContainer> */}
          <Button label="Next" />
        </Content>
      </Container>
    </Background>
  );
};
