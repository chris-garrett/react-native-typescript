import {Pressable, StyleSheet, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {Colors} from "../theme";

export default function Stackable({navigation, route}: { navigation: any, route: any }) {
  const stackCount = route.params.stackCount + 1;
  let stackMessage = `I've been stacked ${stackCount} times`;
  let navigationFunction = () => navigation.navigate("Stackable", {stackCount});
  let buttonLabel = "Stack";

  if (stackCount > 4) {
    stackMessage += " and im not going further";
    navigationFunction = () => navigation.dispatch(StackActions.pop(1));
    buttonLabel = "Go Home";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{stackMessage}</Text>
      <Pressable
        onPress={() => navigationFunction()}
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