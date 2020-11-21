import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../common/constants";
import DataList from "../dataList/DataList";

interface IProps {
  data: any[];
}

export default function PositiveSide({ data = [] }: IProps) {
  return (
    <View style={styles.containerStyle}>
      <DataList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
});
