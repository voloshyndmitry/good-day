import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IReason } from "../../common/interface";
import CustomButton from "../customButton/CustomButton";

interface IProps extends IReason {
  onRemove: (data: IReason) => void;
}

export default function DataListItem({ id, text, onRemove }: IProps) {
  const buttonStyle = {
    flex: 1,
    width: "20%",
    height: "auto",
    padding: 0,
    fontSize: 25,
    backgroundColor: "transparent",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
  };
  return (
    <View style={styles.containerStyle}>
      <CustomButton
        text={"-"}
        customStyle={buttonStyle}
        onClick={() => onRemove({ id, text })}
      />
      <View style={styles.textWrapperStyle}>
        <Text style={styles.textStyle} key={id}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  textWrapperStyle: {
    flex: 4,
    justifyContent: "flex-start",
    paddingHorizontal: 5,
  },
  textStyle: {
    // fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
});
