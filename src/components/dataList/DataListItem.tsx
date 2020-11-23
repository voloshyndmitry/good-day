import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../common/constants";
import { IReason } from "../../common/interface";
import FadeInView from "../animations/FadeInView";
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
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
  };
  return (
    <FadeInView style={containerStyle}>
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
    </FadeInView>
  );
}
const containerStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 3,
};
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
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: 20,
  },
});
