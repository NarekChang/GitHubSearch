import React, { useContext, useState } from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  Easing
} from "react-native";

import MainContext from "../hooks/MainContext";

export default function AreaSelector({ value = "" }) {
  const { loading, query, area, setArea, getItems } = useContext(MainContext);
  const [animatedValue] = useState(new Animated.Value(0));

  const onToggle = () => {
    setArea(value);
    if (query) getItems({ area: value });
  };

  const animStart = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false
    }).start();
  };

  const animEnd = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false
    }).start();
  };

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9]
  });

  const color = value === area ? "#fff" : "#000";
  const backgroundColor = value === area ? "purple" : "transparent";

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        onPress={onToggle}
        onPressIn={animStart}
        onPressOut={animEnd}
        activeOpacity={1}
        disabled={loading}
        style={[s.wrap, { backgroundColor }]}
      >
        <Text style={[s.label, { color }]}>{value.toUpperCase()}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  wrap: {
    margin: 6,
    borderRadius: 6,
    padding: 8
  },
  label: {
    fontSize: 12,
    fontWeight: "600"
  }
});
