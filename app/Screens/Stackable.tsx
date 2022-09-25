import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from "../theme";
import {useStackStore} from "../Stores/StackStore";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export default function Stackable() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const stackStore = useStackStore();
  const maxDepth = 2;

  console.log('Stackable', stackStore.counter);

  const stackCount: number = stackStore.counter;
  let stackMessage = `I've been stacked ${stackCount} times`;
  let buttonLabel = "Stack";
  let stateUpdate = () => {
    stackStore.increase()
    navigation.push('Stackable')
  };

  if (stackCount > maxDepth) {
    stackMessage += " and im not going further";
    buttonLabel = "Go Home";
    stateUpdate = () => {
      stackStore.reset();
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{stackMessage}</Text>
      <Pressable
        onPress={stateUpdate}
        style={styles.button}>
        <Text style={styles.button.text}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: Colors.grosse4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: Colors.grosse1,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20
  },
  button: {
    border: 1,
    borderColor: 'orange',
    backgroundColor: Colors.grosse2,
    padding: 10,
    text: {
      color: Colors.grosse5,
    }
  }
});