import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import {
  BottomSheetContent,
  Buttons,
  Cancel,
  LabelCancel,
  LabelYes,
  styles,
  Text,
  Yes,
} from "./styles";
import EmptyHeartSvg from "../../assets/empty-heart.svg";
import { SvgProps } from "react-native-svg";
import React from "react";

type Props = {
  title: string;
  cancelText: string;
  doItText: string;
  icon: React.FC<SvgProps>;
};

export const Modal = React.forwardRef(
  ({ title, cancelText, doItText, icon: Icon }: Props, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }

    return (
      <BottomSheet
        enablePanDownToClose
        ref={ref}
        snapPoints={[1, 380]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        backdropComponent={BottomSheetBackdrop}
      >
        <BottomSheetContent>
          <Icon width={36} height={36} />
          <Text>{title}</Text>
          <Buttons>
            <Cancel>
              <LabelCancel>{cancelText}</LabelCancel>
            </Cancel>
            <Yes>
              <LabelYes>{doItText}</LabelYes>
            </Yes>
          </Buttons>
        </BottomSheetContent>
      </BottomSheet>
    );
  }
);
