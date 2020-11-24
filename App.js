import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const APP = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [texto, setTexto] = useState('');
  const [color, setColor] = useState('');

  function Calcular() {
    const resultado = peso / (altura / 100) ** 2;
    setResultado(resultado);

    if (resultado <= 17) {
      setTexto('Muito abaixo do peso!!!');
      setColor('#eb3b5a');
    } else if (resultado > 17 && resultado <= 18.49) {
      setTexto('Abaixo do peso!!');
      setColor('#fa8231');
    } else if (resultado >= 18.5 && resultado <= 24.99) {
      setTexto('Peso normal.');
      setColor('#20bf6b');
    } else if (resultado >= 25 && resultado <= 29.99) {
      setTexto('Sobrepeso!');
      setColor('#f7b731');
    } else if (resultado >= 30 && resultado <= 34.99) {
      setTexto('Obesidade I!!');
      setColor('#fa8231');
    } else if (resultado >= 35 && resultado <= 39.99) {
      setTexto('Obesidade II (severa)!!!');
      setColor('#eb3b5a');
    } else {
      setTexto('Obesidade III (mórbida)!!!');
      setColor('#d01638');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="digite sua altura..."
        placeholderTextColor="#fff"
        onChangeText={(altura) => {
          setAltura(altura);
        }}
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="digite seu peso..."
        placeholderTextColor="#fff"
        onChangeText={(peso) => {
          setPeso(peso);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={Calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>IMC: {resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {color: color, fontWeight: 'bold'}]}>
        {texto}
      </Text>
      <Text style={styles.textoInfo}>
        Soluções Mobile {'\n'}
        Engenharia de Computação - UNISATC {'\n'}
        Acadêmicos: Christian e Guilherme Vieira {'\n'}
        Professor orientador: Lucas Resendes Ferreira
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312e38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#a55eea',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 25,
  },
  input: {
    height: 50,
    width: '75%',
    padding: 5,
    paddingLeft: 10,
    fontSize: 25,
    color: 'white',
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#a55eea',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
  resultado: {
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
  },
  textoInfo: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'rgba(255,255,255,0.3)',
    fontSize: 15,
    textAlign: 'right',
  },
});

export default APP;
