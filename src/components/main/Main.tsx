import React from "react";
import { StyleSheet, View } from "react-native";
import { IReason } from "../../common/interface";
import NegativeSide from "./negativeSide/NegativeSide";
import PositiveSide from "./positiveSide/PositiveSide";

interface IProps {
  positiveList: IReason[];
  negativeList: IReason[];
  removeReason: (data: IReason) => void;
}

export default function Main(props: IProps) {
  const { positiveList = [], negativeList = [], removeReason } = props;
  return (
    <View style={styles.containerStyle}>
      <PositiveSide data={positiveList} removeReason={removeReason} />
      <NegativeSide data={negativeList} removeReason={removeReason} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
});
