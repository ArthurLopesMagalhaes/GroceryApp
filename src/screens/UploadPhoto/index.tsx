import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CardButton } from "../../components/CardButton";
import { CircleIcon } from "../../components/CircleIcon";
import { Container } from "../../components/Container";
import PencilSvg from "../../assets/pencil.svg";
import CameraSvg from "../../assets/camera.svg";
import FolderSvg from "../../assets/folder.svg";
import {
  CardsContainer,
  Content,
  EditButton,
  Heading,
  Image,
  Legend,
  ProfilePhotoContainer,
} from "./styles";

export const UploadPhoto = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");

  const goToSetLocation = () => {
    navigation.navigate("SetLocation");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Background>
      <Container>
        <Header label="Upload your photo" onPress={() => navigation.goBack()} />
        <Heading>
          This data will be displayed in your account profile for security
        </Heading>
        <Content>
          {image ? (
            <>
              <ProfilePhotoContainer>
                <Image source={{ uri: image }} />
              </ProfilePhotoContainer>
              <EditButton>
                <PencilSvg />
              </EditButton>
            </>
          ) : (
            <CardsContainer>
              <CardButton height={160} onPress={takeImage}>
                <CircleIcon>
                  <CameraSvg />
                </CircleIcon>
                <Legend>Take a Photo</Legend>
              </CardButton>
              <CardButton height={160} onPress={pickImage}>
                <CircleIcon>
                  <FolderSvg />
                </CircleIcon>
                <Legend>From gallery</Legend>
              </CardButton>
            </CardsContainer>
          )}
          <Button label="Next" onPress={goToSetLocation} />
        </Content>
      </Container>
    </Background>
  );
};
