import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { styles } from './src/theme';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor='black' style='light' />
      <CalculatorScreen />
    </SafeAreaView>
  );
}
