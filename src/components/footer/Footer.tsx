import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../common/constants";

interface IProps {
  positiveCount?: number;
  negativeCount?: number;
}

export default function Footer({
  positiveCount = 0,
  negativeCount = 0,
}: IProps) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.positiveTextStyle}>{positiveCount}</Text>
      <Text style={styles.textStyle}>{"/"}</Text>
      <Text style={styles.negativeTextStyle}>{negativeCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  positiveTextStyle: {
    color: COLORS.green,
    fontSize: 25,
  },
  negativeTextStyle: {
    fontSize: 25,
    color: COLORS.red,
  },
  textStyle: {
    fontSize: 25,
    color: COLORS.gray,
  },
});
