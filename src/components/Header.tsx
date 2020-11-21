import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { COLORS } from "../common/constants";
import CustomButton from "./customButton/CustomButton";

interface IActions {
  setPositive: (data: string) => void;
  setNegative: (data: string) => void;
}

interface IProps {
  actions: IActions;
}

export default function Header({ actions }: IProps) {
  const [value, setValue] = useState("");
  const { setPositive = () => {}, setNegative = () => {} } = actions;
  const addPositive = () => {
    setPositive(value);
    setValue("");
  };
  const addNegative = () => {
    setNegative(value);
    setValue("");
  };
  return (
    <View style={styles.containerStyle}>
      <Text>Header</Text>
      <TextInput
        style={styles.inputStyle}
        value={value}
        onChangeText={(e) => setValue(e)}
      />
      <CustomButton
        customStyle={{
          color: COLORS.green,
          backgroundColor: "white",
          border: `1px solid ${COLORS.green}`,
          borderRadius: 5,
          fontSize: 22,
        }}
        text={"+"}
        onClick={addPositive}
      />
      <CustomButton
        customStyle={{
          color: COLORS.red,
          backgroundColor: "white",
          border: `1px solid ${COLORS.red}`,
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
  },
  inputStyle: {
    width: "50%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.green,
  },
});
