import React, { useRef, useEffect, ReactNode } from "react";
import { Animated, Text, View } from "react-native";

interface IProps {
  duration?: number;
  style?: { [name: string]: string | number };
  children: ReactNode | string;
}

const FadeInView = ({ style = {}, children, duration = 500 }: IProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const animationProps = {
    toValue: 1,
    duration,
    useNativeDriver: false,
  };
  useEffect(() => {
    Animated.timing(fadeAnim, animationProps).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
