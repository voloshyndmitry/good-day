import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../common/constants";
import { IReason } from "../../../common/interface";
import DataList from "../../dataList/DataList";

interface IProps {
  data: any[];
  removeReason: (data: IReason) => void;
  backgroundColor?: string;
}

export default function MainSide({
  data = [],
  removeReason,
  backgroundColor,
}: IProps) {
  const { containerStyle } = getStyle(backgroundColor);
  return (
    <View style={containerStyle}>
      <DataList data={data} onRemove={removeReason} />
    </View>
  );
}

const getStyle = (backgroundColor = COLORS.gray) =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor,
      borderWidth: 2,
      borderColor: COLORS.white,
      borderRadius: 5,
    },
  });
