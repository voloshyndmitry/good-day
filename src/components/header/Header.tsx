import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLORS } from "../../common/constants";
import { IReason } from "../../common/interface";
import CustomButton from "../customButton/CustomButton";
import Logo from "./Logo";

interface IActions {
  setPositive: (data: IReason) => void;
  setNegative: (data: IReason) => void;
}

interface IProps {
  actions: IActions;
}

export default function Header({ actions }: IProps) {
  const [value, setValue] = useState("");
  const { setPositive = () => {}, setNegative = () => {} } = actions;
  const addPositive = () => {
    if (value?.length) {
      setPositive({ text: value, id: new Date().getTime() });
      setValue("");
    }
  };
  const addNegative = () => {
    if (value?.length) {
      setNegative({ text: value, id: new Date().getTime() });
      setValue("");
    }
  };
  return (
    <View style={styles.containerStyle}>
      <Logo />
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          value={value}
          onChangeText={(e: string) => setValue(e)}
        />
      </View>
      <CustomButton
        customStyle={{
          color: COLORS.green,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.green,
          marginHorizontal: 10,
          fontSize: 22,
        }}
        text={"+"}
        onClick={addPositive}
      />
      <CustomButton
        customStyle={{
          color: COLORS.red,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.red,
          marginHorizontal: 10,
          borderRadius: 5,
          fontSize: 22,
        }}
        text={"-"}
        onClick={addNegative}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputContainerStyle: {
    flex: 3,
    paddingHorizontal: 10,
    fontSize: 30,
    height: 30,
    minWidth: "30%",
  },
  inputStyle: {
    width: "100%",
    fontSize: 25,
    color: COLORS.black,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.green,
  },
});
