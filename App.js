import { StyleSheet, View } from 'react-native';
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="oh novinha 🙋‍♀️" />
      <Button text="oh novinha 🙋‍♀️" />
      <Button text="brota no baile 🤸‍♀️" />
      <Button text="do panta 🐆" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
});
