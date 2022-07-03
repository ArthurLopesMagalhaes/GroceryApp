import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import ProfileImg from "../../assets/profile.png";

import {
  CardsContainer,
  Content,
  EditButton,
  Heading,
  Legend,
  ProfilePhotoContainer,
} from "./styles";

import PencilSvg from "../../assets/pencil.svg";
import { Image } from "react-native";
import { CardButton } from "../../components/CardButton";

import CameraSvg from "../../assets/camera.svg";
import FolderSvg from "../../assets/folder.svg";
import { CircleIcon } from "../../components/CircleIcon";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export const UploadPhoto = () => {
  const navigation = useNavigation();

  const goToSetLocation = () => {
    navigation.navigate("SetLocation");
  };

  const openImageGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
    });
  };

  return (
    <Background>
      <Container>
        <Header label="Upload your photo" />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          {/* <ProfilePhotoContainer>
            <Image source={ProfileImg} />
            <EditButton>
              <PencilSvg />
            </EditButton>
          </ProfilePhotoContainer> */}

          <CardsContainer>
            <CardButton height={160}>
              <CircleIcon>
                <CameraSvg />
              </CircleIcon>
              <Legend>Take a Photo</Legend>
            </CardButton>
            <CardButton height={160} onPress={openImageGallery}>
              <CircleIcon>
                <FolderSvg />
              </CircleIcon>
              <Legend>From gallery</Legend>
            </CardButton>
          </CardsContainer>
          <Button label="Next" onPress={goToSetLocation} />
        </Content>
      </Container>
    </Background>
  );
};
