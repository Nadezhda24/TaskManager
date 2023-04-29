import { StyleSheet, Text, View } from 'react-native';
import TaskListPage from "./pages/TaskListPage";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskListPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
