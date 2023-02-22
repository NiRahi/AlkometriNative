import { useState } from 'react';
import styles from '../styles/styles';
import { Alert, Text, TextInput, View } from 'react-native';
import { RadioButton, Button, Switch } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'

export default function OtherCalc() {
  const [Weight, setWeight] = useState(0);
  const [Bottles, setBottles] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Gender, setGender] = useState('first');
  const [Promilles, setPromilles] = useState(0);
  const [IsDarkmode, setIsDarkmode] = useState(false)

  const switchText = IsDarkmode ? 'Lightmode' : 'Darkmode'


  if (Promilles < "0") {
    setPromilles(0);
  }

  let liters = Bottles * 0.33;
  let grams = liters * 8 * 4.5;
  let burn = Weight / 10;
  let gramsLeft = grams - (burn * Hours);

  const calcSum = () => {
    if (Weight <= 0 || Gender == 'first') {
      Alert.alert('Weight not added or no gender selected!')
    } else
      setPromilles(gramsLeft / (Weight * Gender));
  }

  return (
    <View>
      <Text style={styles.label}>Weight:</Text>
      <TextInput
        keyboardType='number-pad'
        value={Weight}
        style={styles.textInput}
        onChangeText={v => setWeight(v)}></TextInput>
      <Text style={styles.label}>Bottles</Text>
      <NumericInput value={Bottles} minValue={0} onChange={v => setBottles(v)} />
      <Text style={styles.label}>Hours</Text>
      <NumericInput value={Hours} minValue={0} onChange={v => setHours(v)} />
      <RadioButton.Group onValueChange={v => setGender(v)} value={Gender}>
        <View>
          <Text>Male</Text>
          <RadioButton value="0.7" />
        </View>
        <View>
          <Text>Female</Text>
          <RadioButton value="0.6" />
        </View>
      </RadioButton.Group>
      <View>
        {Promilles <= 0.5 &&
          <Text style={styles.greenTitle}>{Promilles.toFixed(2)}‰</Text>

        }

        {Promilles > 0.5 &&
          <Text style={styles.redTitle}>{Promilles.toFixed(2)}‰</Text>

        }
      </View>
      <Button
        buttonColor={'steelblue'}
        textColor='black'
        style={styles.Button}
        title='Sum'
        onPress={calcSum}
      >Calculate promilles</Button>
      <View style={styles.switchRow}>
        <Switch
          style={styles.switch}
          value={IsDarkmode}
          onValueChange={() => setIsDarkmode(!IsDarkmode)}
        />
        <Text style={styles.title}>{switchText}</Text>

      </View>
    </View>
  )
}