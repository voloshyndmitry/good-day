import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../common/constants";
import { IReason } from "../../../common/interface";
import DataList from "../../dataList/DataList";

interface IProps {
  data: any[];
  removeReason: (data: IReason) => void;
}

export default function NegativeSide({ data = [], removeReason }: IProps) {
  return (
    <View style={styles.containerStyle}>
      <DataList data={data} onRemove={removeReason} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.red,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 5,
  },
});
