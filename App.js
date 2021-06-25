import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

import { Input, Button } from 'react-native-elements';

export default function App() {

  function calculateBmi(){
    alert("Testando")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <View style={styles.inputContainer}>
        <Input style={styles.input} placeholder='Insira seu peso'></Input>
        <Input style={styles.input} placeholder='Insira sua altura'></Input>
        <Button onPress={calculateBmi} title="Calcular" style={styles.calulateButton} />
      </View>
      <View>
        <Text style={styles.sponsorText}>Developed By:
          {" "}
          <Text style={{ color: '#7CE577', textDecoration: 'underline' }}
            onPress={() => Linking.openURL('https://github.com/matheus-gs')}>
            Matheus-gs
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-evenly',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 50,
    color: '#333',
  },
  inputContainer: {
    width: 350,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sponsorText: {
    fontSize: 14,
    color: '#2a2a2a',
  }
})