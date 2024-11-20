import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {

  return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: 'rgba(121, 15, 167, 0.8)'}} style={({pressed}) => pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id, )}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#E0F2FE',
    borderColor: "#7DD3FC",
    width: "100%"
  },
  goalText: {
    color: '#1E293B',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});