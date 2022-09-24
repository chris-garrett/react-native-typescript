import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../theme';

export default function Home({navigation, route}: { navigation: any, route: any }) {
  const stackCount = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>I'm a teapot at Home</Text>
      <Pressable
        onPress={() => navigation.navigate('Stackable', {stackCount})}
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
