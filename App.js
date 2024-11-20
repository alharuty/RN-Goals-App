import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
      setCourseGoals((currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id)
      }))
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#2563EB" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} endAddGoalHandler={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: "#b5bac5",
  },
  goalsContainer: {
    flex: 5,
  },
});