import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IReason } from "../../common/interface";
import DataListItem from "./DataListItem";

interface IProps {
  data: IReason[];
  onRemove: (data: IReason) => void;
}

export default function DataList({ data = [], onRemove }: IProps) {
  return (
    <View style={styles.containerStyle}>
      {data.map((reason: IReason) => (
        <DataListItem key={reason.id} {...reason} onRemove={onRemove} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
