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
    <TouchableHighlight onPress={onClick} style={buttonStyle}>
      <View>
        <Text
          style={{
            color: customStyle?.color || COLORS.gray,
            fontSize: customStyle?.fontSize || 12,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const getButtonStyle = (customStyle: any = {}) => {
  const buttonStyle = {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 5,
    ...customStyle,
  };
  const styles = StyleSheet.create({
    buttonStyle,
  });

  return styles.buttonStyle;
};
