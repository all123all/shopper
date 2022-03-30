import { LogBox } from 'react-native';
import AppNavigator from './src/app.navigator';

export default function App() {
  console.disableYellowBox = true
  return (
    <AppNavigator />
  );
}