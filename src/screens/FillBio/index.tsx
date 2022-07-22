import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { dateMask, phoneMask } from "../../utils/masks";
import { genders } from "../../utils/genders";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputSelect } from "../../components/InputSelect";
import { Container } from "../../components/Container";
import {
  Form,
  Heading,
  ModalBox,
  ModalContent,
  ModalPicker,
  ModalSelectItem,
  SelectItem,
  TouchableWithoutFeedback,
} from "./styles";
import { theme } from "../../global/theme";
import CalendarSvg from "../../assets/calendar.svg";
import { phoneRegex } from "../../utils/regex";

type FormData = {
  fullName: string;
  nickName: string;
  phoneNumber: string;
  gender: string;
  birthDate: Date;
  address: string;
};

const schema = yup.object().shape({
  fullName: yup.string().trim().required("Full name is required"),
  nickName: yup.string().required("Nick name is required"),
  // phoneNumber: yup.string().matches(phoneRegex, "Invalid phone number"),
  // gender: yup.string().required(),
  // birthDate: yup.date().required(),
  address: yup.string().required("Address is required"),
});

export const FillBio = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [gender, setGender] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const openGenderPicker = () => {
    setShowGenderPicker(true);
  };

  const onSelectGender = (value: string) => {
    setGender(value);
    setShowGenderPicker(false);
  };

  const openCalendar = () => {
    setShowCalendar(true);
  };

  const onChangeDate = (
    _event: DateTimePickerEvent,
    selectdDate: Date | undefined
  ) => {
    const currentDate = selectdDate || date;
    setShowCalendar(false);
    const fDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    setDate(currentDate);
  };

  const goToPaymentMethod = (data: FormData) => {
    data.phoneNumber = phoneNumber;
    data.birthDate = date;
    data.gender = gender;
    navigation.navigate("PaymentMethod");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Background>
          <Container>
            <Header
              label="Fill in your bio"
              onPress={() => navigation.goBack()}
            />
            <Heading>
              This data will be displayed in your account profile for security
            </Heading>
            <Form>
              <Input
                label="Full Name*"
                placeholder="Your fullname"
                icon={() => <View />}
                name="fullName"
                control={control}
              />
              <Input
                label="Nick Name*"
                placeholder="Your nickname"
                icon={() => <View />}
                name="nickName"
                control={control}
              />
              <Input
                label="Phone Number*"
                placeholder="Your phone number"
                icon={() => <View />}
                name="phoneNumber"
                control={control}
                keyboardType="numeric"
                maxLength={15}
                onChangeText={(txt) => setPhoneNumber(phoneMask(txt))}
                value={phoneNumber}
              />
              <InputSelect
                label="Gender*"
                placeholder="Your gender"
                onPress={openGenderPicker}
                value={gender}
              />
              <Input
                label="Date of Birth*"
                placeholder="Your date of birth"
                icon={() => <CalendarSvg />}
                name="birthDate"
                control={control}
                keyboardType="numeric"
                onPress={openCalendar}
                maxLength={10}
                value={date.toLocaleDateString()}
                editable={true}
              />
              <Input
                label="Adrress*"
                placeholder="Your address"
                icon={() => <View />}
                name="address"
                control={control}
              />

              <ModalPicker
                animationType="slide"
                transparent
                visible={showGenderPicker}
                onRequestClose={() => setShowGenderPicker(false)}
                statusBarTranslucent
              >
                <TouchableWithoutFeedback
                  onPress={() => setShowGenderPicker(false)}
                >
                  <ModalContent>
                    <ModalBox>
                      {genders.map((item) => (
                        <ModalSelectItem
                          key={item.value}
                          activeOpacity={0.5}
                          onPress={() => onSelectGender(item.value)}
                          underlayColor={theme.colors.primary}
                        >
                          <SelectItem>{item.label}</SelectItem>
                        </ModalSelectItem>
                      ))}
                    </ModalBox>
                  </ModalContent>
                </TouchableWithoutFeedback>
              </ModalPicker>

              {showCalendar && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  is24Hour={true}
                  onChange={onChangeDate}
                />
              )}
              <Button label="Next" onPress={handleSubmit(goToPaymentMethod)} />
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
