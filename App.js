import styles from './styles/styles';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import OtherCalc from './components/OtherCalc';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Alcometer</Text>
          <OtherCalc />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}



