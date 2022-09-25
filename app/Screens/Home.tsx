import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../theme';

import {useStackStore} from "../Stores/StackStore";
import {useNavigation, useRoute} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const stackStore = useStackStore();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>I'm a teapot at Home</Text>
      <Pressable
        onPress={(e) => {
          e.preventDefault();
          stackStore.increase();
          navigation.push('Stackable')
        }}
        style={styles.button}>
        <Text style={styles.button.text}>Home</Text>
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
