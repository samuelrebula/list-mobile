import React from "react";
import { View, Text, StyleSheet, Pressable, TextStyle, ViewStyle } from "react-native";

interface Props {
  id: string;
  text: string;
  onDeleteItem: (id: string) => void;
}

const GoalItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#1a1a1a" }}
        onPress={() => props.onDeleteItem(props.id)}
        style={({ pressed }) => pressed ? styles.pressedItem : null}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

interface Styles {
  goalItem: ViewStyle;
  pressedItem: ViewStyle;
  goalText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#686868",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

