import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Form,
  Heading,
  ModalBox,
  ModalContent,
  ModalPicker,
  ModalSelectItem,
  SelectItem,
} from "./styles";
import CalendarSvg from "../../assets/calendar.svg";
import ArrowDownSvg from "../../assets/arrowdown.svg";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { dateMask, phoneMask } from "../../utils/masks";
import { useState } from "react";
import { InputSelect } from "../../components/InputSelect";

import { genders } from "../../utils/genders";
import { theme } from "../../global/theme";
import { useForm } from "react-hook-form";

type FormData = {
  fullname: string;
  nickname: string;
  phone_number: string;
  gender: string;
  birth_date: Date;
  address: string;
};

export const FillBio = () => {
  const { control, handleSubmit } = useForm<FormData>();
  // const [fullName, setFullName] = useState("");
  // const [nickname, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const [address, setAddress] = useState("");

  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [formatedDate, setFormatedDate] = useState("");

  const navigation = useNavigation();

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
    setFormatedDate(fDate);
  };

  const goToPaymentMethod = (data: FormData) => {
    console.log(data);
    console.log(date);
    navigation.navigate("PaymentMethod");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Background>
          <Container>
            <Header label="Fill in your bio" />
            <Heading>
              This data will be displayed in your account profile for security
            </Heading>
            <Form>
              <Input
                name="fullname"
                control={control}
                rules={{ required: "Type your full name" }}
                label="Full Name*"
                placeholder="Your fullname"
                icon={() => <View />}
              />
              <Input
                name="nickname"
                control={control}
                rules={{ required: "Type your nickname" }}
                label="Nick Name*"
                placeholder="Your nickname"
                icon={() => <View />}
              />
              <Input
                name="phone_number"
                control={control}
                rules={{ required: "Type your phone number" }}
                label="Phone Number*"
                placeholder="Your phone number"
                icon={() => <View />}
                keyboardType="numeric"
                maxLength={15}
              />
              <InputSelect
                label="Gender*"
                placeholder="Your gender"
                onPress={openGenderPicker}
                value={gender}
              />
              <Input
                name="birth_date"
                control={control}
                rules={{ required: "Choose your date of birth" }}
                label="Date of Birth*"
                placeholder="Your date of birth"
                icon={() => <CalendarSvg />}
                keyboardType="numeric"
                onPress={openCalendar}
                maxLength={10}
                value={date.toLocaleDateString()}
              />
              <Input
                name="address"
                control={control}
                rules={{ required: "Type your address" }}
                label="Adrress*"
                placeholder="Your address"
                icon={() => <View />}
              />

              <ModalPicker
                animationType="slide"
                transparent
                visible={showGenderPicker}
                onRequestClose={() => setShowGenderPicker(false)}
              >
                <ModalContent>
                  <ModalBox>
                    {genders.map((item) => (
                      <ModalSelectItem
                        key={item.value}
                        activeOpacity={0.5}
                        onPress={() => onSelectGender(item.value)}
                      >
                        <SelectItem>{item.label}</SelectItem>
                      </ModalSelectItem>
                    ))}
                  </ModalBox>
                </ModalContent>
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
