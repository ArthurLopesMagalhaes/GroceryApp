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
import { api } from "../../services/api";

type DataProps = {
  birth_date: string;
  email: string;
  full_name: string;
  gender: string;
  nickname: string;
  password: string;
  phone_number: string;
  profile_photo: string;
};

export const UploadPhoto = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState<string>("");
  const formData = new FormData();

  formData.append("birth_date", "2022-07-08");
  formData.append("email", "juliaaaa@gmail.coma");
  formData.append("full_name", "Arthur Lopes");
  formData.append("gender", "male");
  formData.append("nickname", "xArthurLM");
  formData.append("password", "12345678");
  formData.append("phone_number", "53346363");
  formData.append("avatar", {
    uri: image,
    name: "image.jpg",
    type: "image/jpeg",
  });

  const uploadImg = async () => {
    try {
      const response = await api.post("/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToSetLocation = () => {
    uploadImg();
    navigation.navigate("SetLocation");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
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
      console.log(image);
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
