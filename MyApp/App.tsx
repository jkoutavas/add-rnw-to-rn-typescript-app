import React, {useState} from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const rnType = Platform.OS === 'web' ? 'React Native Web' : 'React Native';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello from {'\n'}
        {rnType}!
      </Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>Click me!</Text>
      </TouchableOpacity>

      <Text>You clicked {count} times!</Text>

      <Text style={styles.novascript}>Nova Script font</Text>

      <Image
        source={require('./assets/images/reddog.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  novascript: {
    marginTop: 30,
    fontSize: 24,
    ...Platform.select({
      default: {fontFamily: 'Nova Script'},
      android: {fontFamily: 'novascript'},
    }),
  },
  image: {
    marginTop: 30,
    width: 96,
    height: 96,
  },
});

export default App;
