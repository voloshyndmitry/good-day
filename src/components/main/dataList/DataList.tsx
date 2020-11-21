import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  data: any[];
}

export default function DataList({ data = [] }: IProps) {
  return (
    <View style={styles.containerStyle}>
      {data.map((data: string, index: number) => (
        <Text key={index + 1}>{data}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: "10px",
    paddingHorizontal: "20px",
  },
});
