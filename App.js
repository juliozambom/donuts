import Routes from './src/routes/routes';
import { useFonts, Iceberg_400Regular } from '@expo-google-fonts/iceberg';
import { Qwigley_400Regular } from '@expo-google-fonts/qwigley'

export default function App() {
  let [fontsLoaded] = useFonts({
    Iceberg_400Regular, 
    Qwigley_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes /> 
}
 
