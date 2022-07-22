import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

export const FillBio = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [nickname, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [formatedDate, setFormatedDate] = useState("");

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

  const goToPaymentMethod = () => {
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
              />
              <Input
                label="Nick Name*"
                placeholder="Your nickname"
                icon={() => <View />}
              />
              <Input
                label="Phone Number*"
                placeholder="Your phone number"
                icon={() => <View />}
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
                keyboardType="numeric"
                onPress={openCalendar}
                maxLength={10}
                value={date.toLocaleDateString()}
              />
              <Input
                label="Adrress*"
                placeholder="Your address"
                icon={() => <View />}
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
              <Button label="Next" onPress={goToPaymentMethod} />
            </Form>
          </Container>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
