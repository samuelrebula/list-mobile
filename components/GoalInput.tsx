import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface Props {
  visible: boolean;
  onAddGoal: (goal: string) => void;
  onCancel: () => void;
}

const GoalInput: React.FC<Props> = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#9c9c9c" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#363636" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

interface Style {
  inputContainer: ViewStyle;
  image: ImageStyle;
  textInput: TextStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#585858",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

