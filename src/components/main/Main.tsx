import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../common/constants";
import { IReason } from "../../common/interface";
import MainSide from "./mainSide/MainSide";

interface IProps {
  positiveList: IReason[];
  negativeList: IReason[];
  removeReason: (data: IReason) => void;
}

export default function Main(props: IProps) {
  const { positiveList = [], negativeList = [], removeReason } = props;
  return (
    <View style={styles.containerStyle}>
      <MainSide
        data={positiveList}
        removeReason={removeReason}
        backgroundColor={COLORS.green}
      />
      <MainSide
        data={negativeList}
        removeReason={removeReason}
        backgroundColor={COLORS.red}
      />
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
