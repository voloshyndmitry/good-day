import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { COLORS } from "../../common/constants";

interface IProps {
  text: string;
  customStyle?: any;
  onClick?: () => void;
}

export default function CustomButton(props: IProps) {
  const { text, customStyle = {}, onClick = () => {} } = props;
  const buttonStyle = getButtonStyle(customStyle);

  return (
    <View style={styles.containerStyle}>
      <TouchableHighlight onPress={onClick}>
        <View style={buttonStyle}>
          <Text
            style={{ color: "inherit", fontSize: customStyle?.fontSize || 12 }}
          >
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const getButtonStyle = (customStyle: any = {}) => {
  const buttonStyle = {
    alignItems: "center",
    backgroundColor: COLORS.gray,
    padding: 10,
    ...customStyle,
  };
  const styles = StyleSheet.create({
    buttonStyle,
  });
  return styles.buttonStyle;
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
