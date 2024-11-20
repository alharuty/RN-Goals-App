import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    props.endAddGoalHandler();
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#388d6e"/>
          </View>

          <View style={styles.button}>
            <Button title="Close" onPress={props.endAddGoalHandler} color="#F87171"/>
          </View>
        </View>
      </View>
    </Modal>
    
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#b5bac5'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#94A3B8 ',
    width: '100%',
    padding: 10,
    backgroundColor: '#F9FAFB',
    color: "#1E293B",
    borderRadius: 6,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});