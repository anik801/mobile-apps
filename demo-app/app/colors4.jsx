import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const RGBInputScreen = () => {
  const [red, setRed] = useState('0');
  const [green, setGreen] = useState('0');
  const [blue, setBlue] = useState('0');

  const clamp = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return 0;
    return Math.max(0, Math.min(255, num));
  };

  const getRGBColor = () => {
    return `rgb(${clamp(red)}, ${clamp(green)}, ${clamp(blue)})`;
  };

  return (
    <View style={styles.container}>
      {/* Output Color Box */}
      <View style={[styles.colorBox, { backgroundColor: getRGBColor() }]} />

      {/* RGB Inputs */}
      <View style={styles.inputRow}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>R</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={red}
            onChangeText={setRed}
            maxLength={3}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>G</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={green}
            onChangeText={setGreen}
            maxLength={3}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>B</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={blue}
            onChangeText={setBlue}
            maxLength={3}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputGroup: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default RGBInputScreen;
